import { Router } from 'express';

import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({
        version: 1.0
    });
});

routes.post('/users', UserController.store);
routes.post('/session', );

routes.use(authMiddleware);




export default routes;