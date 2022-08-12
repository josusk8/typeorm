import { Request, Response } from "express";
import { Task } from "../entities/Task";


export const createTask = async (req: Request, res: Response) => {
  try {
    const { user, tittle, priority, description } = req.body;

    const task = new Task();
    task.user = user;
    task.tittle = tittle;
    task.priority = priority;
    task.priority = description;

    await task.save();

    return res.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
