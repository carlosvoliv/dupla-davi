'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('reservas',
      [
        {
          name: 'Wanda Maximov',
          email: 'scarletwitch@marvel.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '4',
        },
        {
          name: 'Bruce Wayne',
          email: 'batman@dc.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '3',
        },
        {
          name: 'Barry Allen',
          email: 'flash@dc.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '6',
        },
        {
          name: 'The Vision',
          email: 'vision@marvel.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '4',
        },
        {
          name: 'Steve Rogers',
          email: 'cap@marvel.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '3',
        },
        {
          name: 'Steven Strange',
          email: 'doutor@marvel.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '1',
        },
        {
          name: 'Peter Parker',
          email: 'spiderman@marvel.com',
          checkin: '2021-04-01',
          checkout: '2021-05-01',
          quarto_id: '2',
        },
      ],
      {
        updateOnDuplicate: ['name', 'email', 'checkin', 'checkout', 'quarto_id'],
        ignoreDuplicates: true
      }
    )

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservas', null, {});
  }
};
