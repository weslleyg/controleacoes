const express = require('express');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const tradesController = require('./controllers/tradesController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/register', userController.create);

routes.post('/session', sessionController.create);

routes.get('/trades', authMiddleware, tradesController.index);
routes.delete('/trades/:id', authMiddleware, tradesController.delete);
routes.post('/trades', authMiddleware, tradesController.create);

module.exports = routes;