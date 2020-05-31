import request from 'supertest';
import app from '../../src/pmzshop';

import truncate from '../util/truncate';

describe('Product', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should be able to create a product', async () => {
        const response = await request(app)
            .post('/products')
            .send({
                name: 'Motor 0KM 1.5',
                description: 'Motor Honda',
                price: 899,
                unit: 100
            });

        expect(response.body).toHaveProperty('id');
    });

    it('should be able to list all products', async () => {
        await request(app)
            .post('/products')
            .send({
                name: 'Motor 0KM 1.5',
                description: 'Motor Honda',
                price: 899.99,
                unit: 100
            });

        const response = await request(app)
            .get('/products');

        expect(response.body).toBeInstanceOf(Array);
    });

    //it('should be able to search product by name', async () => {
    //    await request(app)
    //        .post('/products')
    //        .send({
    //            name: 'Motor 0KM 1.5',
    //            description: 'Motor Honda',
    //            price: 899.99,
    //            unit: 100
    //        });
    //    
    //    const response = await request(app)
    //        .get('/products?q=motor');
    //
    //    expect(response.body).toBeInstanceOf(Array);
    //});
});