const { Router } = require('express');

const router = Router();

// Controladores
const {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight
} = require('../controllers/flight');

// Listado de vuelos
router.get('/', getFlights);

// Obtener un vuelo
router.get('/:id', getFlight);

// Registrar un vuelo
router.post('/', createFlight);

// Actualizar un vuelo
router.put('/:id', updateFlight);

// Eliminar un vuelo
router.delete('/:id', deleteFlight);

module.exports = router;
