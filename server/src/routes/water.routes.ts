import { Router } from "express";
const router = Router();

import { 
  createDeviceMeasurement,
  getMeasurements,
  getOneMeasurement
  } 
   from "../controllers/water.controller";

router.get("/getMeasurements", getMeasurements);
router.post("/createDeviceMeasurement", createDeviceMeasurement);
router.get("/getOneMeasurement/:id", getOneMeasurement);


export default router;
