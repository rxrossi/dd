const Sequelize = require("sequelize")

export default new Sequelize({
  dialect: "sqlite",
  // storage: "dd.db",
  storage: ":memory:",
  logging: false
})
