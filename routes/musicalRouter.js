const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicalController.js');

router.get('/', controller.index);
router.get('/id/:id', controller.findById);
router.get('/:name', controller.findByName);
router.post('/', controller.create);
router.put('/id/:id', controller.update);
router.delete('/id/:id', controller.delete);

module.exports = router;
