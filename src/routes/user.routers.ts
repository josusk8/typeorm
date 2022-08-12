import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getUser
} from "../controllers/user.controllers";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);


export default router;
