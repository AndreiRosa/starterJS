const express = require('express');
const routes = express.Router();

const Product = require('./controllers/ProductController');

rotures.get('/products', Product.index);
rotures.get('/products/:id', Product.show);
rotures.post('/products', Product.store);
rotures.put('/products/:id', Product.update);
rotures.delete('/products/:id', Product.destroy);

module.exports = routes;