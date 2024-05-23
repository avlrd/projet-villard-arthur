import { verifyToken } from "./jwtMiddleware";

module.exports = app => {
	const test = "test";

	let router = require("express").Router();

	router.get("/", verifyToken, (request, response) => {
		response.json({ message: test });
	});

	app.use("/api/test", router);
}