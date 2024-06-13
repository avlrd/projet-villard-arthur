import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import EntryPoint from './routes/_entrypoint';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/", EntryPoint);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}).on("error", (error: Error) => {
	throw new Error(`Unable to start server: ${error}`);
});