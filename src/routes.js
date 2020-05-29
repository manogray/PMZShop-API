import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ version: 1.0 });
})

export default routes;