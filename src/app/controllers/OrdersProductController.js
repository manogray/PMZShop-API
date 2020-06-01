import Order from '../models/Order';
import Product from '../models/Product';
import User from '../models/User';
import OrdersProduct from '../models/OrdersProduct';

import { Transaction } from 'sequelize';

class OrdersProductController {
	async store(req, res){
		const user_id = req.userId;

		const user = await User.findByPk(user_id);
		if(!user){
			return res.status(400).json({ error: "ID is not valid" });
		}

		const { unit } = req.body;
		const { order_id, product_id } = req.params;

		const order = await Order.findByPk(order_id);
		const product = await Product.findByPk(product_id);

		if(!product){
			return res.status(400).json({ error: "product is not valid" });
		}

		if(order){
			if(order.user_id != user_id){
				return res.status(401).json({ error: "user does own this order" });
			}
		}else {
			return res.status(401).json({ error: "order is not valid" })
		}

		const new_unit = product.unit - unit;

		const relation = await OrdersProduct.create({
			order_id,
			product_id,
			unit
		});

		await Product.update({ unit: new_unit }, {
			where: {
				id: product_id
			},
		});

		return res.json(relation);
	}

	async index(req, res) {
		const user_id = req.userId;

		const user = await User.findByPk(user_id);
		if(!user){
			return res.status(400).json({ error: "ID is not valid" });
		}

		const order_id = req.params.id;

		const order = await Order.findByPk(order_id);
		if(order){
			if(order.user_id != user_id){
				return res.status(401).json({ error: "user does own this order" });
			}
		}else {
			return res.status(401).json({ error: "order is not valid" })
		}

		const products = await OrdersProduct.findAll({
			where: {
				order_id
			},
			include: [
				{
					model: Product,
					as: 'product',
					attributes: ['id', 'name', 'price']
				}
			],
			attributes: ['id', 'unit']
		});

		return res.json(products);
	}
}

export default new OrdersProductController();