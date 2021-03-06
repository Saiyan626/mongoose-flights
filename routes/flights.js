const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new 
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete);

module.exports = router;