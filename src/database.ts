import { Sequelize } from "sequelize";
import { environments } from "./environments/environments";

const sequelize = new Sequelize(environments.database as string,environments.username as string,environments.password,{
    dialect: 'mysql',
    host: environments.host,
});

export default sequelize;