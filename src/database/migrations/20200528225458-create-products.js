'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', 
        { 
            id: {
                type:Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type:Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type:Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type:Sequelize.DOUBLE,
                allowNull: false,
            },
            unit: {
                type:Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type:Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type:Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('products');
    }
};
