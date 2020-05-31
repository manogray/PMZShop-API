import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({
        version: 1.0
    });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);

routes.use(authMiddleware);

export default routes;
