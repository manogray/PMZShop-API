'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('orders_products', 'unit', {
        type: Sequelize.INTEGER
      });
  },

  down: (queryInterface) => {
      return queryInterface.removeColumn('orders_products', 'unit');
  }
};
