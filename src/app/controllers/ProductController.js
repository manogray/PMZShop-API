import Product from '../models/Product';
import { Op } from 'sequelize';
import * as Yup from 'yup';

class ProductController {
	async store(req, res){
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			description: Yup.string().required(),
			price: Yup.number().required(),
			unit: Yup.number().required()
		});

		if (!(await schema.isValid(req.body))){
			return res.status(400).json({ error: 'data is not valid' });
		}

		const { name, description, price, unit } = req.body;

		const product = await Product.create({
			name,
			description,
			price,
			unit
		});

		return res.json(product);
	}

	async index(req, res){
		if(req.query.q){
			const query = `${req.query.q}%`;
			const products = await Product.findAll({
				where: {
					name:{ 
						[Op.iLike]: query
					}
				},
				order: ['name']
			});

			return res.json(products);
		}

		const products = await Product.findAll({
			order: ['name'],
		});

		return res.json(products);
	}
}

export default new ProductController();