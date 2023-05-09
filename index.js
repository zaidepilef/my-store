const express = require('express');
const app = express();
const port = 3000;

//una ruta
app.get('/', (req, res) => {
  res.send('hola server');
});

app.listen(port, () => {
  console.log('Mi port es ' + port);
});
