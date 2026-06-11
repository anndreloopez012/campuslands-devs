const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Enruta la petición HTTP POST hacia el controlador correspondiente
router.post('/matches', matchController.createNewMatch);

module.exports = router;