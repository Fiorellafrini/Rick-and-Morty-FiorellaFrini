require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const characterModel = require("./models/Character");
const favoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  // URL
  { logging: false, native: false }
);

characterModel(sequelize);
favoriteModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
