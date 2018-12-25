const Sequelize = window.require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require('../config/database')[env]

const sequelize = new Sequelize({
  ...config,
  operatorsAliases: Sequelize.Op,
  logging: false,
})

function setupImport(model) {
  return model.default(sequelize, Sequelize.DataTypes)
}

const db = {
  Professional: setupImport(require('./professional')),
  Sale: setupImport(require('./sale')),
  Client: setupImport(require('./client')),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
