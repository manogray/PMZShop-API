import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Product from '../app/models/Product';
import Order from '../app/models/Order';
import OrdersProduct from '../app/models/OrdersProduct';

const models = [User, Product, Order, OrdersProduct];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();