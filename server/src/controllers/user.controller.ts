import { Request, Response } from "express";

import User from "../database/datamodels/user.model";

export const getUsers = async (request: Request, response: Response) => {
  try {
	const users = await User.find().select("-password");
	response.json(users);
  } catch (error: Error | any) {
	console.error(error);
	response.status(500).json({ message: "Server error" });
  }
};