import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class User extends Model {
	public id!: number;
	public login!: string;
	public password!: string;
};

User.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4
	},
	login: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	tableName: 'User'
});

export default User;