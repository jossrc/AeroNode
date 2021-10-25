const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Flight = db.define('Flight', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  initialDestination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  finalDestination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dayOfExit: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dayOfArrival: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  arrivalTime: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  plane: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seatsNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'EN ESPERA',
  },
});

module.exports = Flight;
