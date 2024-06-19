import { Request, Response } from "express";
import { getProducts } from "../database/commands/products.commands";

export const get = async (request: Request, response: Response) => {
	console.log('GET /api/products');
	const filter: string = request.query.filter as string;
	try {
		const products = await getProducts(filter);
		console.log("hihi" + products);
		response.status(200).send(products);
	}
	catch (error: Error | any) {
		console.error(error);
		response.status(500).send('Server error at getProducts controller');
	}
}