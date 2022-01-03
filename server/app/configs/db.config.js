module.exports = {
    HOST: 'localhost',
    PORT: '3000',
    DB_URL: 'mongodb://localhost:27017/blitzchat',
    SECRET_KEY: 'secret',
    SALT_ROUND: 10,
    JWT_EXPIRES: '1h',
    JWT_REFRESH_EXPIRES: '7d',
    JWT_REFRESH_TOKEN_EXPIRES: '1d',
    JWT_REFRESH_TOKEN_LIFETIME: '1d',
    JWT_REFRESH_TOKEN_LIMIT: 10,
    JWT_REFRESH_TOKEN_LIMIT_PER_USER: 5,
    JWT_REFRESH_TOKEN_LIMIT_PER_IP: 5,
}