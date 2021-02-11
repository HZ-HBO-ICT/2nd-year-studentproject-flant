import { Router } from "express";
const router = Router();
 
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
  getUserDevices,
} from "../controllers/user.controller";

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/authenticate", authenticateUser);

router.get("/getUserDevices/:id", getUserDevices);


export default router;
