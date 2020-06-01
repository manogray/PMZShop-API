import Sequelize, { Model } from 'sequelize';

class OrdersProduct extends Model {
    static init(sequelize){
        super.init({
            unit: Sequelize.INTEGER,
        },
        {
            sequelize,
        });

        return this;
	}
	
	static associate(models){
		this.belongsTo(models.Order, { as: 'order', foreignKey: 'order_id' });
		this.belongsTo(models.Product, { as: 'product', foreignKey: 'product_id' });
	}

}

export default OrdersProduct;