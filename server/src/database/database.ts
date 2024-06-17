import { Sequelize } from "sequelize";

const connexionString: string | undefined = process.env.DB_DONNEXION_STRING;

var sequelize: Sequelize;

if (connexionString === undefined) {
	sequelize = new Sequelize({
		dialect: 'sqlite',
		storage: './database.sqlite',
		logging: false
	});
}
else {
	sequelize = new Sequelize(connexionString, {
		dialect: 'postgres',
		protocol: 'postgres',
		dialectOptions: {
			ssl: true,
			native: true
		}
	});
}

export default sequelize;