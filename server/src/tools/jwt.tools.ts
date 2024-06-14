import jwt from 'jsonwebtoken';

import { User } from '../models/user.model';

export const generateToken = (user: User) => {
	const token = jwt.sign(
		{ _id: user._id, username: user.username },
		process.env.TOKEN_SECRET as string,
		{ expiresIn: '1h' }
	);
	return token;
}