const { Router } = require('express');

const router = Router();

// Controladores
const { getFlights, getFlight, createFlight } = require('../controllers/flight');

// Listado de vuelos
router.get('/', getFlights);

// Obtener un vuelo
router.get('/:id', getFlight);

// Registrar un vuelo
router.post('/', createFlight);

module.exports = router;
