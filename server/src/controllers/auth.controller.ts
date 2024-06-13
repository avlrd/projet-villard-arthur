import { Request, Response } from 'express';
import { hashPassword, comparePasswords } from '../tools/bcrypt.tools';
import { generateToken } from '../tools/jwt.tools';
import User from '../models/user.model';
import Credentials from '../models/credentials.model';

export const register = async (request: Request, response: Response) => {
	console.log("Register request");
	const credentials: Credentials = request.body;

	try {
		let username = credentials.username;
		let user = await User.findOne ({ username });

		if (user) return response.status(400).json({ message: 'User already exists' });

		const hashedPassword = await hashPassword(credentials.password);

		user = new User({
			username,
			password: hashedPassword
		});

		await user.save();

		const token = generateToken(user);
		response.json({ token });
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).json({ message: 'Server error' }); //TODO: handle errors
	}
};

export const login = async (request: Request, response: Response) => {
	const credentials: Credentials = request.body;

	try {
		const username = credentials.username;
		const user = await User.findOne({ username });

		if (!user) return response.status(400).json({ message: 'User not found' });

		const passwordMatch = await comparePasswords(credentials.password, user.password);

		if (!passwordMatch) return response.status(400).json({ message: 'Invalid credentials' });

		const token = generateToken(user);
		response.json({ token });
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).json({ message: 'Server error' }); //TODO: handle errors
	}
}