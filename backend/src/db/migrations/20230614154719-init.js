"use strict";
const { USER_TABLE, UserSchema} = require('../models/userModel')
const { DEPARTAMENTO_TABLE, DepartamentoSchema} = require('../models/departamentoModel');
const { CIUDAD_TABLE,CiudadSchema } =require('../models/ciudadModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(DEPARTAMENTO_TABLE,DepartamentoSchema);
    await queryInterface.createTable(CIUDAD_TABLE,CiudadSchema);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);
    await queryInterface.dropTable(CIUDAD_TABLE);

  },
};
