import { Request, Response } from 'express';
import { hashPassword, comparePasswords } from '../tools/bcrypt.tools';
import { generateToken } from '../tools/jwt.tools';
import User from '../models/user.model';

export const register = async (request: Request, response: Response) => {
	const { username, password } = request.body;

	try {
		let user = await User.findOne ({ username });

		if (user) return response.status(400).json({ message: 'User already exists' });

		const hashedPassword = await hashPassword(password);

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
	const { username, password } = request.body;

	try {
		const user = await User.findOne({ username });

		if (!user) return response.status(400).json({ message: 'User not found' });

		const passwordMatch = await comparePasswords(password, user.password);

		if (!passwordMatch) return response.status(400).json({ message: 'Invalid credentials' });

		const token = generateToken(user);
		response.json({ token });
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).json({ message: 'Server error' }); //TODO: handle errors
	}
}