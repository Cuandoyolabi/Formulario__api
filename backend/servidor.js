// servidor.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite peticiones desde el frontend
app.use(express.json()); // para parsear JSON

app.post('/enviar', (req, res) => {
  console.log(req.body); // Ver los datos enviados
  res.json({ mensaje: 'Datos recibidos correctamente', datos: req.body });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

