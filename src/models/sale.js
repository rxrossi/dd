export default (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    value: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Professional)
    Sale.belongsTo(models.Client)
  }

  return Sale
}
