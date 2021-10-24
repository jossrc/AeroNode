const express = require('express');

const app = express();
const PORT = 3000;

// Manejando globalmente las rutas
app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
