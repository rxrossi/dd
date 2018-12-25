export default (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    value: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    notes: DataTypes.TEXT,
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Professional)
    Sale.belongsTo(models.Client)
  }

  return Sale
}
