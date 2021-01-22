const express = require('express');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const tradesController = require('./controllers/tradesController');

const routes = express.Router();

routes.post('/register', userController.create);

routes.post('/session', sessionController.create);

routes.get('/trades', tradesController.index);
routes.delete('/trades/:id', tradesController.delete);
routes.post('/trades', tradesController.create);

module.exports = routes;