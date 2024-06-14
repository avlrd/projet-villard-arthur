import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
	const token = request.headers.authorization?.split(' ')[1];

	if (!token) return response.status(401).json({ message: 'Access denied' });

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
		(request as any).user = verified as User;
		next();
	}
	catch (error: Error | any) {
		response.status(400).json({ message: 'Invalid token' });
	}
}