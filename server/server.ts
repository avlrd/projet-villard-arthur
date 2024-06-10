import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/api/test', (request: Request, response: Response) => {
	console.log('GET /api/test');
	response.status(200).send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}).on("error", (error: Error) => {
	throw new Error(`Unable to start server: ${error}`);
});