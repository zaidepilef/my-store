const express = require('express');
const app = express();
const port = 3000;

//una ruta
app.get('/', (req, res) => {
  res.send('hola server');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy una nueva ruta');
});

app.get('/home', (req, res) => {
  res.send('hola soy una nueva ruta');
});

// vamos hacer una API sencilla
app.get('/products', (req, res) => {
  res.json([
    { name: 'producto uno', price: 1500 },
    { name: 'producto dos', price: 1200 },
    { name: 'producto tres', price: 1360 },
    { name: 'producto cuatro', price: 1560 },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'producto elegido',
    price: 2300,
  });
});

// vamos hacer una API sencilla
app.get('/categories', (req, res) => {
  res.json([{ name: 'categoria uno', id: 15 }]);
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
  });
});

// con queryParams
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

// REST
// Representation State Transfer
// metodos GET PUT POST DELETE
// GET trae tosos los recursos
// GET/:id tare el unico o el seleccionado
// PUT es para actualizar el objeto
//
app.listen(port, () => {
  console.log('Mi port es ' + port);
});
