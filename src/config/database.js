require('dotenv/config');

module.exports = {
    dialect: process.env.NODE_ENV == 'test' ? 'sqlite' : 'postgres',
    host: 'localhost',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    storage: './__tests__/database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}