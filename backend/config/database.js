import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', '1234',{
    host: "34.101.111.133",
    dialect: "mysql"
});

export default db;
