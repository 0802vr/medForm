const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const { ENV_PORT, MONGO_URL } = require('./utils/config');
const routers = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routers);
app.use(errors());
app.use(errorHandler);
/* console.log(Date()); */
mongoose.connect(MONGO_URL, () => {
  console.log(`Монго запущена ${MONGO_URL}`);
});
app.listen(ENV_PORT, () => {
  console.log(`Сервер ${ENV_PORT} работает`);
});
