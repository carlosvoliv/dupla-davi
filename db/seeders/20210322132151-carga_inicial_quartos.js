'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('quartos',
      [
        {
          description: 'cama solteiro, ar-condicionado, smartv, wifi',
          name: 'quarto individual',
          reservation_date: '2021-04-01',
          status: true,
        },
        {
          description: 'cama casal, ar-condicionado, smartv, wifi',
          name: 'quarto casal',
          reservation_date: '2021-04-01',
          status: true,
        },
        {
          description: 'cama casal, ar-condicionado, smartv, wifi, banheiro exclusivo',
          name: 'suite casal',
          reservation_date: '2021-04-01',
          status: true,
        },
        {
          description: 'dois beliches, ar-condicionado, smartv, wifi',
          name: 'quarto coletivo',
          reservation_date: '2021-04-01',
          status: true,
        },
        {
          description: 'dois beliches, ar-condicionado, smartv, wifi, banheiro exclusivo',
          name: 'suite coletiva',
          reservation_date: '2021-04-01',
          status: true,
        },
        {
          description: 'quarto alcochoado e almofadado sem camas, ar-condicionado, smartv, wifi, banheiro exclusivo',
          name: 'undefined',
          reservation_date: '2021-04-01',
          status: true,
        },
      ],
      {
        updateOnDuplicate: ['name', 'description', 'reservation_date', 'status'],
        ignoreDuplicates: true
      }
    )

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quartos', null, {});
  }
};
