'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('reservas',
      [
        {
          name: 'Wanda Maximov',
          email: 'scarletwitch@marvel.com',
          data_nascimento: '2021-04-01',
          quarto_id: '2',
        },
        {
          name: 'Bruce Wayne',
          email: 'batman@dc.com',
          data_nascimento: '2021-04-01',
          quarto_id: '3',
        },
        {
          name: 'Barry Allen',
          email: 'flash@dc.com',
          data_nascimento: '2021-04-01',
          quarto_id: '6',
        },
        {
          name: 'The Vision',
          email: 'vision@marvel.com',
          data_nascimento: '2021-04-01',
          quarto_id: '1',
        },
        {
          name: 'Steve Rogers',
          email: 'cap@marvel.com',
          data_nascimento: '2021-04-01',
          quarto_id: '3',
        },
        {
          name: 'Steven Strange',
          email: 'doutor@marvel.com',
          data_nascimento: '2021-04-01',
          quarto_id: '4',
        },
      ],
      {
        updateOnDuplicate: ['name', 'email', 'data_nascimento', 'quarto_id'],
        ignoreDuplicates: true
      }
    )

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quartos', null, {});
  }
};
