import request from 'supertest';
import app from '../../src/pmzshop';

import truncate from '../util/truncate';

describe('Order', () => {
	beforeEach(async () => {
        await truncate();
	});
	
	it('should be able to create a order if am I signed', async () => {
		await request(app)
			.post('/users')
			.send({
				name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
                confirmPasswd: '123456'
			});

		const user = await request(app)
			.post('/sessions')
			.send({
				email: 'lgmpf@icomp.ufam.edu.br',
				passwd: '123456'
			});

		const response = await request(app)
			.post('/orders')
			.set("Authorization", "Bearer "+user.body.token)
			.send({
				total: 1550.50
			});

		expect(response.body).toHaveProperty('id');
	});

	it('should be able to list user orders', async () => {
		await request(app)
			.post('/users')
			.send({
				name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
                confirmPasswd: '123456'
			});

		const user1 = await request(app)
			.post('/sessions')
			.send({
				email: 'lgmpf@icomp.ufam.edu.br',
				passwd: '123456'
			});

		await request(app)
			.post('/orders')
			.send({
				total: 1550.50
			})
			.set("Authorization", "Bearer "+user1.body.token);
		
		const response1 = await request(app)
			.get('/orders')
			.set("Authorization", "Bearer "+user1.body.token);

		expect(response1.body).toBeInstanceOf(Array);
		
	});

	it('should be able to change status of order', async () => {
		await request(app)
			.post('/users')
			.send({
				name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
                confirmPasswd: '123456'
			});

		const user = await request(app)
			.post('/sessions')
			.send({
				email: 'lgmpf@icomp.ufam.edu.br',
				passwd: '123456'
			});

		const order = await request(app)
			.post('/orders')
			.send({
				total: 1550.50
			})
			.set("Authorization", "Bearer "+user.body.token);

		const response = await request(app)
			.put("/orders/"+order.body.id+"/confirmed")
			.set("Authorization", "Bearer "+user.body.token);

		expect(response.body).toHaveProperty('status');
	});

	it('should be able to add products on order', async () => {
		await request(app)
			.post('/users')
			.send({
				name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
                confirmPasswd: '123456'
			});

		const user = await request(app)
			.post('/sessions')
			.send({
				email: 'lgmpf@icomp.ufam.edu.br',
				passwd: '123456'
			});

		const order = await request(app)
			.post('/orders')
			.send({
				total: 1550.50
			})
			.set("Authorization", "Bearer "+user.body.token);

		const product = await request(app)
			.post('/products')
			.send({
				name: 'Motor 0KM 1.5',
				description: 'Motor Honda',
				price: 899,
				unit: 100
			});

		const response = await request(app)
			.post("/orders/"+order.body.id+"/products/"+product.body.id)
			.send({
				unit: 10
			})
			.set("Authorization", "Bearer "+user.body.token);

		expect(response.body).toHaveProperty('id');
	});

	it('should be able to list all products in a order', async () => {
		await request(app)
			.post('/users')
			.send({
				name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
                confirmPasswd: '123456'
			});

		const user = await request(app)
			.post('/sessions')
			.send({
				email: 'lgmpf@icomp.ufam.edu.br',
				passwd: '123456'
			});

		const order = await request(app)
			.post('/orders')
			.send({
				total: 1550.50
			})
			.set("Authorization", "Bearer "+user.body.token);

		const product = await request(app)
			.post('/products')
			.send({
				name: 'Motor 0KM 1.5',
				description: 'Motor Honda',
				price: 899,
				unit: 100
			});

		await request(app)
			.post("/orders/"+order.body.id+"/products/"+product.body.id)
			.send({
				unit: 10
			})
			.set("Authorization", "Bearer "+user.body.token);
		
		const response = await request(app)
			.get("/orders/"+order.body.id+"/products")
			.set("Authorization", "Bearer "+user.body.token);

		expect(response.body).toBeInstanceOf(Array);
	});

});