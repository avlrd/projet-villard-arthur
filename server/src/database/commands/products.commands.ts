import { Op } from "sequelize";
import Product from "../datamodels/product.model";

export const getProducts = async (filter: string): Promise<Array<Product>> => {
	if(filter === null || filter === undefined || filter === '') {
		return await Product.findAll();
	}
	else {
		return await Product.findAll({ where: { name: { [Op.iLike]: `%${filter}%`} } });
	}
}