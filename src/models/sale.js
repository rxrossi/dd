export default (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    value: DataTypes.INTEGER,
    name: DataTypes.STRING
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Professional)
  }

  return Sale
}
