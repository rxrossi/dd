export default (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  })

  Client.associate = models => {
    Client.hasMany(models.Sale)
  }

  return Client
}
