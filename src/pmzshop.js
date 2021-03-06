import './bootstrap';

import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';

class PMZShop {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new PMZShop().server;