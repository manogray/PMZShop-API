'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        name: 'Carlos Fabiano',
        email: 'carlosfab@gmail.com',
        password: '$2a$08$HSU6W4yAL1s.HrjDQlaR1uINC57Vw325f895PzgLruJm.kt4mduzK',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
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
