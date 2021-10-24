const { request, response } = require('express');

/**
 * Obtiene todos los vuelos
 * @param {request} request Request
 * @param {response} response Response
 */
const getFlights = (request, response) => {
  response.json({
    ok: true,
    message: 'Vuelos obtenidos correctamente',
    flights: [
      {
        id: 1,
        initialDestination: 'Perú',
        finalDestination: 'Colombia',
        dayOfExit: '2020-05-05',
        dayofArrival: '2020-05-06',
        departureTime: '10:00',
        arrivalTime: '12:00',
        plane: 'Avianca',
        seatsNumber: 100,
        status: 'En espera',
      },
    ],
  });
};

/**
 * Obtiene un vuelo
 * @param {request} request Request
 * @param {response} response Response
 */
const getFlight = (request, response) => {

  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }
  
  console.log({id});

  response.json({
    ok: true,
    message: 'Vuelo obtenido correctamente',
    flight: {
      id: 1,
      initialDestination: 'Perú',
      finalDestination: 'Colombia',
      dayOfExit: '2020-05-05',
      dayofArrival: '2020-05-06',
      departureTime: '10:00',
      arrivalTime: '12:00',
      plane: 'Avianca',
      seatsNumber: 100,
      status: 'En espera',
    },
  });
};

/**
 * Registra un vuelo
 * @param {request} request 
 * @param {response} response 
 */
const createFlight = (request, response) => {
  const { body } = request;

  console.log({body});

  response.json({
    ok: true,
    message: 'Vuelo registrado correctamente',
    flight: {
      id: 1
    }
  });
};

/**
 * Actualiza un vuelo
 * @param {request} request 
 * @param {response} response 
 */
const updateFlight = (request, response) => {
  const { body } = request;
  const { id } = request.params;
  console.log({id});

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }

  // Buscar por su id
  console.log({body});

  response.json({
    ok: true,
    message: 'Vuelo actualizado correctamente',
    flight: {
      id: 1
    }
  });

};

/**
 * Elimina un vuelo
 * @param {request} request 
 * @param {response} response 
 */
const deleteFlight = (request, response) => {
  const { id } = request.params;
  console.log({id});

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }

  response.json({
    ok: true,
    message: 'Vuelo eliminado correctamente'
  });

}

module.exports = {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight
};
