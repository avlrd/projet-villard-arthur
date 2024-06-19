import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class Product extends Model {
	public id!: number;
	public name!: string;
	public type!: string;
	public price!: number;
	public image!: string;
};

Product.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	tableName: 'Product'
});

export default Product;