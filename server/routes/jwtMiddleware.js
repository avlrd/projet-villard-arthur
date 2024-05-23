import JWT from 'jsonwebtoken';

import { ACCESS_TOKEN_SECRET } from '../config';

module.exports = {
	verifyToken: (request, response, next) => {
		const token = request.headers['authorization'];
		let JWTPayload;

		try {
			let JWTBearer = token.split(' ')[1];
			console.log("Authorization : " + JWTBearer);

			JWTPayload = JWT.verify(JWTBearer, ACCESS_TOKEN_SECRET, {
				complete: true,
				algorithms: ['HS256'],
				clockTolerance: 0,
				ignoreExpiration: false,
				ignoreNotBefore: false
			});

			request.token = JWTPayload;
		} catch (error) {
			console.log(error);
			response.status(401)
				.type("json")
				.send(JSON.stringify({ message: "Missing or invalid token" }));
			return;
		}

		next();
	}
}