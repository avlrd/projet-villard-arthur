import { Request, Response } from 'express';
import { generateToken } from '../tools/jwt.tools';
import { createUser, getUser } from '../database/commands/user.commands';
import User from '../database/datamodels/user.model';
import Credentials from '../models/credentials.model';

export const register = async (request: Request, response: Response) => {
	console.log('POST /api/auth/register');
	const credentials: Credentials = request.body;

	const user: User | null = await getUser(credentials.login.toLowerCase());
	if (user) return response.status(400).send('User already exists');

	try {
		const newUser = await createUser(credentials.login.toLowerCase(), credentials.password);
		console.log(`User created: ${newUser}`);
		response.status(200).send('User created successfully');
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).send('Server error at registration controller');
	}
}
	

export const login = async (request: Request, response: Response) => {
	console.log('POST /api/auth/login');
	const credentials: Credentials = request.body;

	const user: User | null = await getUser(credentials.login.toLowerCase());
	if (!user) return response.status(400).json({ message: 'User not found' });

	if (user.password !== credentials.password) return response.status(400).json({ message: 'Invalid password' });

	const token = generateToken(user);
	response.setHeader('Authorization', `Bearer ${token}`);
	response.status(200).send('User logged in successfully');
}