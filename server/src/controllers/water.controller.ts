import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { WaterEntity } from "../entity/water.entity";

export const getMeasurements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const getWater = await getRepository(WaterEntity).find();
  return res.json(getWater);
};


//get water with /id given
export const getOneMeasurement = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(WaterEntity).findOne(req.params.id);
  return res.json(results);
};


//creates new measurement with deviceId and water values given by the device 
export const createDeviceMeasurement = async function (req: Request, res: Response) {
  const newMeasurement = await getRepository(WaterEntity).create(req.body);
  const deviceId = req.body
  const results = await getRepository(WaterEntity).save(newMeasurement, deviceId);
  return res.json(results);
};