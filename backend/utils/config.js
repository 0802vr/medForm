require('dotenv').config();

const {
  PORT, MONGOOSE_DB,
} = process.env;

const ENV_PORT = PORT || 3001;

const MONGO_URL = MONGOOSE_DB || 'mongodb://localhost:27017/formdb';

module.exports = {
  ENV_PORT, MONGO_URL
};
