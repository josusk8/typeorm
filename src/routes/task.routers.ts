import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  getTask
} from "../controllers/task.controllers";

const router = Router();

router.get("/task", getTask);
router.get("/task/:id", getTask);
router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);


export default router;
