import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            price: Sequelize.DOUBLE,
            unit: Sequelize.INTEGER,
            amount: {
               type: Sequelize.VIRTUAL,
               get(){
                   return 1;
               }
            },
        },
        {
            sequelize,
        });

        return this;
    }

}

export default Product;