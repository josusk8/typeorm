import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controllers";
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

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);


export default router;
