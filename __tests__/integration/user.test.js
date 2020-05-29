import request from 'supertest';
import app from '../../src/pmzshop';

import truncate from '../util/truncate';

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should be able to register', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456',
            });

        expect(response.body).toHaveProperty('id');
    });

    it('should be able to login', async () => {
        await request(app)
            .post('/users')
            .send({
                name: 'Luis Mota',
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456'
            })

        const response = await request(app)
            .post('/sessions')
            .send({
                email: 'lgmpf@icomp.ufam.edu.br',
                passwd: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });
});