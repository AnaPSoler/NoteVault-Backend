require("dotenv").config();
const { Sequelize } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

if (!config) {
  throw new Error(`❌ No se encontró configuración para el entorno: ${env}`);
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false,
  }
);

module.exports = sequelize;
