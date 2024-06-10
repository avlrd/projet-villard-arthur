import { Request, Response } from 'express';

const uno = (request: Request, response: Response): void => {
	console.log('GET /test');
	response.send('Hello');
}

export default {
	uno
}
