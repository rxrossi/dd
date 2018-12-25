'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface
      .createTable('clients', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          unique: true,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      })
      .then(() => {
        return queryInterface.addColumn('sales', 'clientId', {
          type: DataTypes.INTEGER,
          references: {
            model: 'clients',
            key: 'id',
          },
          onUpdate: 'restrict',
          onDelete: 'restrict',
        })
      })
  },

  down: queryInterface => {
    return queryInterface.dropTable('clients').then(() => {
      return queryInterface.removeColumn('sales', 'clientId')
    })
  },
}
