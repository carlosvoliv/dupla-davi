'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      quarto_id: {
        type: Sequelize.INTEGER,
        references: { model: 'quartos', key: 'id' },
        onDelete: 'CASCADE',
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservas');
  }
};
