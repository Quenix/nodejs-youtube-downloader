const { Router } = require('express');

const DevController = require('./controllers/DevController');

const routes = Router();
routes.post('/download', YoutubeController.index);

module.exports = routes;