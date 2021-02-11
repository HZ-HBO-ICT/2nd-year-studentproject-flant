import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DeviceEntity } from "../entity/device.entity";

//TODO get all water entries with the given device id
//get device/id -> water 
export const getDeviceMeasurements= async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DeviceEntity).find({where:{id:req.params.id}, relations: ['water']})
  //TODO make a check if the user excists
  return res.json(results[0].water);
  // return res.json(results[1].water);

};


//TODO get device water measurements of today
//TODO get device water measurements of this week
//TODO get device water measurements of this month
//TODO be able to add a new device to the database -> using the logged in user id as userId
//TODO be able to add current devices that are bound to a user
//TODO be able to delete one device from the database as a user
