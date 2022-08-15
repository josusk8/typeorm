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

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    return res.json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { tittle, description, priority } = req.body;
    const task = await Task.findOneBy({ id: parseInt(req.params.id) });

    if (!task) return res.status(404).json({ message: "User does not exits" });
    task.tittle = tittle;
    task.description = description;
    task.priority = priority;
    task.save();

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const {} = req.body;
    const task = await Task.findOneBy({ id: parseInt(req.params.id) });

    if (!task) return res.status(404).json({ message: "Task does not exits" });
    task.deletedAt = new Date();

    task.save();

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneBy({ id: parseInt(id) });
    return res.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
