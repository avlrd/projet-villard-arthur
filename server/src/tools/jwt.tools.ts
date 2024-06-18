import jwt from 'jsonwebtoken';

import User from '../database/datamodels/user.model';

export const generateToken = (user: User): string => {
	const token: string = jwt.sign({ login: user.login }, process.env.TOKEN_SECRET as string, { expiresIn: '1h' });
	return token;
}