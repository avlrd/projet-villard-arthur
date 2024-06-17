import User from '../models/user.model';

export const createUser = async (login: string, password: string): Promise<User> => {
	const user = await User.create({ login: login, password: password });
	return user;
}

export const getUser = async (login: string): Promise<User | null> => {
	const user = await User.findOne({ where: { login: login } });
	return user;
}