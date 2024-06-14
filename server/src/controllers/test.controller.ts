import { Request, Response } from 'express';

const uno = (request: Request, response: Response): void => {
	console.log('GET /test');
	response.status(200).send("Hello");
}

export default {
	uno
}
