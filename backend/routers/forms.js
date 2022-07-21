const router = require('express').Router();
const {
  getForm,
  createForm,

} = require('../controllers/forms');

/* const {
  validationPost,
  validationDelete,
} = require('../middlewares/validation'); */

router.get('/forms', getForm);
router.post('/forms', createForm);
/* router.delete('/forms/:formsId', validationDelete, deleteForm); */

module.exports = router;
