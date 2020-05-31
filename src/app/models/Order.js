import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    static init(sequelize){
        super.init({
            sales_code: Sequelize.STRING,
            total: Sequelize.DOUBLE,
            status: Sequelize.STRING,
        },
        {
            sequelize,
        });

        return this;
	}
	
	static associate(models){
		this.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
	}

}

export default Order;