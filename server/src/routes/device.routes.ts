

import { Router } from "express";
const router = Router();
 
import {
  getDeviceMeasurements,
} from "../controllers/device.controller";

router.get("/getDeviceMeasurements/:id", getDeviceMeasurements);

export default router;
