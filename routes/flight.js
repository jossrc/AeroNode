const { Router } = require('express');

const router = Router();

// Listado de vuelos
router.get('/', (request, response) => {
  response.json({
    ok: true,
    message: 'Listado de vuelos',
  });
});

module.exports = router;
