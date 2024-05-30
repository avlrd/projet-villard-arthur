import express from 'express';

const app = express();

const PORT = 3000;

app.get('/api/test', (req, res) => {
	console.log('GET /api/test');
	res.send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});