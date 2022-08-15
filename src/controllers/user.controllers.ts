import { Request, Response } from "express";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const encryptPassword = await bcrypt.hash(password, 10);
    const user = new User();

    user.username = username;
    user.password = encryptPassword;
    await user.save();

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { username, oldPassword, newPassword } = req.body;
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "User does not exits" });
    } else {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return false;
      } else {
        const passwordHash = await bcrypt.hash(newPassword, 10);
        user.id = Number(req.params.id)
        user.username = username;
        user.password = passwordHash;
        user.save();
        return res.sendStatus(204);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
