import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();

const corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	headers: "Content-Type, Authorization",
	exposedHeaders: "Authorization"
};

app.use(cors(corsOptions));

app.use(json());

app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "Response from server" });
});

require("./routes")(app);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});