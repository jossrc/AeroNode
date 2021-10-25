const { Sequelize } = require('sequelize');

const db = new Sequelize('db_aeronode', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
})

module.exports = db;