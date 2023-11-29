const { User, UserSchema } = require('./userModel')
const { Ciudad, CiudadSchema} = require('./ciudadModel')
const { Departamento,DepartamentoSchema } = require('./departamentoModel')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Departamento.init(DepartamentoSchema, Departamento.config(sequelize))
  Ciudad.init(CiudadSchema,Ciudad.config(sequelize))

  User.associate(sequelize.models)
  Departamento.associate(sequelize.models)
  Ciudad.associate(sequelize.models)

}

module.exports = setupModels