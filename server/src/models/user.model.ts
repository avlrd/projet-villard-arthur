import { Schema, model } from 'mongoose';

export interface User extends Document {
	_id: string;
	username: string;
	password: string;
}

const UserSchema = new Schema<User>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

export default model<User>('User', UserSchema);