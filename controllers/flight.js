const { request, response } = require('express');
const Flight = require('../models/Flight');

/**
 * Obtiene todos los vuelos
 * @param {request} request Request
 * @param {response} response Response
 */
const getFlights = async (request, response) => {
  const flights = await Flight.findAll();

  response.json({
    ok: true,
    message: 'Vuelos obtenidos correctamente',
    flights,
  });
};

/**
 * Obtiene un vuelo
 * @param {request} request Request
 * @param {response} response Response
 */
const getFlight = async (request, response) => {
  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }

  const flight = await Flight.findByPk(id);

  response.json({
    ok: true,
    message: 'Vuelo obtenido correctamente',
    flight,
  });
};

/**
 * Registra un vuelo
 * @param {request} request
 * @param {response} response
 */
const createFlight = async (request, response) => {
  const { body } = request;
  console.log({ body });

  const flight = await Flight.create(body);

  response.json({
    ok: true,
    message: 'Vuelo registrado correctamente',
    flight,
  });
};

/**
 * Actualiza un vuelo
 * @param {request} request
 * @param {response} response
 */
const updateFlight = async (request, response) => {
  const { body } = request;
  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }

  // Obtenemos el vuelo
  const flight = await Flight.findByPk(id);

  // Actualizamos los datos
  await flight.update(body);

  response.json({
    ok: true,
    message: 'Vuelo actualizado correctamente',
    flight,
  });
};

/**
 * Elimina un vuelo
 * @param {request} request
 * @param {response} response
 */
const deleteFlight = async (request, response) => {
  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).json({
      ok: false,
      message: 'Id inválido',
    });
  }

  // Obtenemos el vuelo
  const flight = await Flight.findByPk(id);

  // Eliminamos el vuelo
  await flight.destroy();

  response.json({
    ok: true,
    message: `Vuelo con id ${id} eliminado correctamente`,
  });
};

module.exports = {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight,
};
