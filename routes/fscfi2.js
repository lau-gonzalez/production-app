const { Router } = require('express');
const router = Router();

const { getFscs, createFsc, getFsc, deleteFsc, updateFsc } = require('../controllers/fscfi2.controllers');

router.route('/')
    .get(getFscs)
    .post(createFsc)

router.route('/:id')
     .get(getFsc)
     .put(updateFsc)
     .delete(deleteFsc)



module.exports = router;