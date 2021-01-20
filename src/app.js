const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config');

const app = express();


mongoose.connect(config.connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//models

//import das rotas

const indexRoute = require('./routes/index-route');

app.use(
	bodyParser.json({
		limit: '5mb'
	})
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

app.use('/', indexRoute);

module.exports = app;