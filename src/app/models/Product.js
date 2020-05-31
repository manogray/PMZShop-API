import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            price: Sequelize.DOUBLE,
            unit: Sequelize.INTEGER,
        },
        {
            sequelize,
        });

        return this;
    }

}

export default Product;