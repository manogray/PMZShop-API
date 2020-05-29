import request from 'supertest';
import app from '../../src/pmzshop';

import truncate from '../util';

describe('Product', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should be able to create a product', async () => {

    });

    it('should be able to list all products', async () => {

    });

    it('should be able to search product by name', async () => {

    });
});