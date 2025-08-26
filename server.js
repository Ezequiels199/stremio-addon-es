const express = require('express');
const app = express();
const manifest = require('./manifest.json');

app.get('/manifest.json', (req, res) => {
  res.json(manifest);
});

// Ruta raíz opcional que devuelve un pequeño mensaje
app.get('/', (req, res) => {
  res.send('Add-on de Stremio (manifest) - ejecutándose');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor del add-on ejecutándose en puerto', PORT);
});
