const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./modules/db');

const router = require('./modules/router');

app
	.disable('x-powered-by')
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended : true}))
	.use('/api', router);

const Server = require('./modules/server');
const server = new Server(app, 3000, 'Server started on port 3000!!!');