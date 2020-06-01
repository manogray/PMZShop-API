'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name: 'Motor 0KM 1.5 Flex',
        description: 'Motor VolksWagem',
        price: 699.99,
        unit: 150,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Motor 0KM 2.0',
        description: 'Motor Fiat',
        price: 999.99,
        unit: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pneu aro 15',
        description: 'Pneu Lightyear',
        price: 889.99,
        unit: 300,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bateria de Moto 24V 5AH',
        description: 'Bateria Moura 24V 5AH',
        price: 359.99,
        unit: 230,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Caixa de Câmbio 5 posições',
        description: 'Câmbio Manual Audi',
        price: 499.99,
        unit: 150,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Caixa de Câmbio 6 posições',
        description: 'Câmbio Automático Audi',
        price: 989.99,
        unit: 200,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Caixa de Câmbio 5 posições',
        description: 'Câmbio Manual Fiat',
        price: 329.99,
        unit: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kit freio hidráulico',
        description: 'Freio Fiat',
        price: 1099.99,
        unit: 60,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kit freio à Ar',
        description: 'Freio VolksWagem',
        price: 1199.99,
        unit: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Escapamento duplo alumínio',
        description: 'Escapamento VolksWagem',
        price: 499.99,
        unit: 120,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
