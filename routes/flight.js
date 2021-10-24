const { Router } = require('express');

const router = Router();

// Controladores
const { getFlights, getFlight } = require('../controllers/flight');

// Listado de vuelos
router.get('/', getFlights);

// Obtener un vuelo
router.get('/:id', getFlight);

module.exports = router;
