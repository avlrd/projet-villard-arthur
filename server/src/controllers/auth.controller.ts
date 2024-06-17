import { Request, Response } from 'express';
import { generateToken } from '../tools/jwt.tools';
import { createUser, getUser } from '../database/commands/user.commands';
import User from '../models/user.model';
import Credentials from '../models/credentials.model';

export const register = async (request: Request, response: Response): Promise<any> => {
	console.log('POST /api/auth/register');
	const credentials: Credentials = request.body;

	const user = await getUser(credentials.username);
	if (user) return response.status(400).json({ message: 'User already exists' });

	try {
		const newUser = await createUser(credentials.username, credentials.password);
		console.log(`User created: ${newUser}`);
		response.status(200).send('User created successfully');
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).json({ message: 'Server error at registration controller' });
	}
}
	

export const login = async (request: Request, response: Response) => {
	const credentials: Credentials = request.body;

	try {
		const username = credentials.username;
		const user = await User.findOne({ username });

		if (!user) return response.status(400).json({ message: 'User not found' });

		const passwordMatch = credentials.password === user.password;

		if (!passwordMatch) return response.status(400).json({ message: 'Invalid credentials' });

		const token = generateToken(user);
		response.json({ token });
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).json({ message: 'Server error' });
	}
}