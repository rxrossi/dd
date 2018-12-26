export default (sequelize, DataTypes) => {
  const Service = sequelize.define('service', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    value: DataTypes.INTEGER,
  })

  Service.associate = models => {
    Service.hasMany(models.Sale)
  }

  return Service
}
