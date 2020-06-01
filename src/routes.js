import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';
import OrdersProductController from './app/controllers/OrdersProductController';

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

routes.get('/orders',OrderController.index);
routes.post('/orders',OrderController.store);
routes.put('/orders/:id/:status',OrderController.update);

routes.post('/orders/:order_id/products/:product_id', OrdersProductController.store);
routes.get('/orders/:id/products', OrdersProductController.index);

export default routes;
