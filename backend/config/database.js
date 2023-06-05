import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', '1234',{
    host: "34.101.119.204",
    dialect: "mysql"
});

export default db;
