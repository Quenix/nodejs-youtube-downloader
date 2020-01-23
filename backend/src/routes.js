const { Router } = require('express');

const YoutubeController = require('./controllers/YoutubeController');

const routes = Router();
routes.post('/download', YoutubeController.store);

module.exports = routes;