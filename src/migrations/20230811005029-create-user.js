'use strict';

module.exports = {
  up: async function(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primarKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      display_name: {
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
     },
      password: {
        allowNull: false,
        type: Sequelize.STRING
     },
      image: {
        allowNull: false,
        type: Sequelize.STRING
     }
    }),
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
