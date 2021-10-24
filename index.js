const express = require('express');

const app = express();
const PORT = 3000;

// Lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Manejando globalmente las rutas
app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
