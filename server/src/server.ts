import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import EntryPointRouter from './routes/_entrypoint';

dotenv.config();

const app = express();

app.use(cors({
	origin: 'hhtp://localhost:4200',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api", EntryPointRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}).on("error", (error: Error) => {
	throw new Error(`Unable to start server: ${error}`);
});