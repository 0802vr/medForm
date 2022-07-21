const router = require('express').Router();
const forms = require('./forms');

const NotFound = require('../errors/error404');

router.use(forms);

router.use('*', (req, res, next) => {
  next(new NotFound('Страница не существует'));
});

module.exports = router;
