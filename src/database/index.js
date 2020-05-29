import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const models = []

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(process.env.DATABASE_URL, {
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        });

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();