const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const sequelize = new Sequelize('database.sqlite', null, null, {
  dialect: dbConfig.development.dialect,
  storage: dbConfig.development.storage,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/User.js')(sequelize, Sequelize);

module.exports = db;
