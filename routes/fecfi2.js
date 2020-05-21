const { Router } = require('express');
const router = Router();

const { getFhs, createFh, getFh, deleteFh, updateFh } = require('../controllers/fecfi2.controllers');

router.route('/')
    .get(getFhs)
    .post(createFh)

router.route('/:id')
     .get(getFh)
     .put(updateFh)
     .delete(deleteFh)



module.exports = router;