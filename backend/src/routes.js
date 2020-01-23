const { Router } = require('express');

const YoutubeController = require('./controllers/YoutubeController');

const routes = Router();
routes.post('/download', YoutubeController.index);

module.exports = routes;