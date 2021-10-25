const express = require('express');
const db  = require('./db/db');

const app = express();
const PORT = 3000;

// Conectando a la base de datos
db.authenticate()
.then(() => {
  console.log('Conexión a la base de datos exitosamente');
})
.catch(err => {
  console.error('No se pudo conectar a la BD', err);
});

// Lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Manejando globalmente las rutas
app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
