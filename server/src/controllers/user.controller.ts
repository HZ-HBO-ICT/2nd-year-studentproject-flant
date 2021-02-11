import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { TokenEntity } from "../entity/token.entity";

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//get all users
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(UserEntity).find();
  return res.json(users);
};

//get user with /id given
export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(UserEntity).findOne(req.params.id);
  return res.json(results);
};

//authenticates users
export const authenticateUser = async function (req: Request, res: Response) {
  const user = await getRepository(UserEntity).findOne({
    where: { username: req.body.username },
  });
  if (user !== undefined) {
    bcrypt.compare(
      req.body.password,
      user.password,
      async function (err: Error, isValid: Boolean) {
        if (isValid == true) {
          var token = jwt.sign(
            { id: user.id, username: user.username },
            "verySecureKey"
          );
          const newToken = await getRepository(TokenEntity).save({
            user: user.id,
            token: token,
            lastTimestamp: Math.round(new Date().getTime() / 1000),
            hostName: req.hostname,
            createdTimestamp: Math.round(new Date().getTime() / 1000),
          });
          console.log(newToken);
          res.json({
            status: true,
            message: null,
            payload: {
              userId : user.id,
              username: user.username,
              token: token,
            },
          });
          res.send("Acces granted");
        } else {
          res.json({
            status: false,
            message: "Invalid credentials, please try again",
            payload: null,
          });
        }
      }
    );
  } else {
    res.json({
      status: false,
      message: "Invalid credentials, please try again",
      payload: null,
    });
  }
};

//creates new user
export const createUser = async function (req: Request, res: Response) {
  bcrypt.hash(req.body.password, 10, async function (err: Error, hash: string) {
    req.body.password = hash;
    const newUser = await getRepository(UserEntity).create(req.body);
    const results = await getRepository(UserEntity).save(newUser);
    return res.json(results);
  });
};

//update user/id 
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(UserEntity).findOne(req.params.id);
  if (user) {
    getRepository(UserEntity).merge(user, req.body);
    const results = await getRepository(UserEntity).save(user);
    return res.json(results);
  }
  return res.json({ msg: "user not found" });
};

//delete user/id
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(UserEntity).delete(req.params.id);
  return res.json(results);
};

//get user/id -> devices 
export const getUserDevices = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(UserEntity).find({where:{id:req.params.id}, relations: ['device']})
    //TODO make a check if the user excists
    return res.json(results[0].device);
  };
