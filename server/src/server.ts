import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import EntryPointRouter from './routes/_entrypoint';
import Database from './database/database';

dotenv.config();

const app = express();

app.use(cors({
	origin: 'http://localhost:4200',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 3000;

app.use(express.json())

Database.sync()
	.then(() => {
		console.log("Database synchronized");
	})
	.catch((error: Error) => {
		console.error(`Failed to synchronize database: ${error}`);
	});

app.use("/", EntryPointRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}).on("error", (error: Error) => {
	throw new Error(`Unable to start server: ${error}`);
});