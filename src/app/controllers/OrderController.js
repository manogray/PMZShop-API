import User from '../models/User';
import Order from '../models/Order';
import ShortUniqueId from 'short-unique-id';

class OrderController {
	async store(req, res){
		const user_id = req.userId;

		const user = await User.findByPk(user_id);

		if(!user){
			return res.status(400).json({ error: "ID is not valid" });
		}

		const uid = new ShortUniqueId({ length: 16 });

		const sales_code = uid();

		const { total } = req.body;

		const order = await Order.create({
			user_id,
			sales_code,
			total,
		});

		return res.json(order);
	}

	async index(req, res){
		const user_id = req.userId;

		const user = await User.findByPk(user_id);

		if(!user){
			return res.status(400).json({ error: "ID is not valid" });
		}

		const orders = await Order.findAll({
			where: {
				user_id
			},
			order: ['id']
		});

		return res.json(orders);

	}

	async update(req, res){
		const user_id = req.userId;

		const user = await User.findByPk(user_id);

		if(!user){
			return res.status(400).json({ error: "ID is not valid" });
		}

		const order_id = req.params.id;
		const new_status = req.params.status;

		const order = await Order.findByPk(order_id);

		if(order.user_id != user_id){
			return res.status(401).json({ error: "user does own this order" })
		}

		order.status = new_status;

		const { id, status } = await order.save();
		
		return res.json({
			id,
			status
		});
	}
}

export default new OrderController();