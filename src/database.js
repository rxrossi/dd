const Sequelize = window.require("sequelize")
export { Sequelize }

export default new Sequelize({
  dialect: "sqlite",
  storage: "dd.db",
  // storage: ":memory:",
  logging: false
})
