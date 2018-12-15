export default (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    value: DataTypes.INTEGER
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Professional)
  }

  return Sale
}
