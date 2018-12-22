'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface
      .createTable('professionals', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          unique: true,
        },
        percentage: DataTypes.INTEGER,
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      })
      .then(() => {
        return queryInterface.createTable('sales', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          value: DataTypes.INTEGER,
          name: DataTypes.STRING,
          date: DataTypes.DATE,
          professionalId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'professionals',
              key: 'id',
            },
            onUpdate: 'restrict',
            onDelete: 'restrict',
          },
          createdAt: {
            type: DataTypes.DATE,
          },
          updatedAt: {
            type: DataTypes.DATE,
          },
        })
      })
  },

  down: queryInterface => {
    return queryInterface.dropTable('professionals').then(() => {
      return queryInterface.dropTable('sales')
    })
  },
}
