export default (sequelize, DataTypes) => {
  const Professional = sequelize.define('professional', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    percentage: DataTypes.INTEGER,
  })

  Professional.associate = models => {
    Professional.hasMany(models.Sale)
  }

  return Professional
}
