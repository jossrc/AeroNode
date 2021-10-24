const { Router } = require('express');

const router = Router();

// Controladores
const {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
} = require('../controllers/flight');

// Listado de vuelos
router.get('/', getFlights);

// Obtener un vuelo
router.get('/:id', getFlight);

// Registrar un vuelo
router.post('/', createFlight);

// Actualizar un vuelo
router.put('/:id', updateFlight);

module.exports = router;
