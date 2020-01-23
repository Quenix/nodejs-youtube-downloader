const { Router } = require('express');

const YoutubeController = require('./controllers/YoutubeController');

const routes = Router();
routes.get('/download', YoutubeController.index);
routes.post('/store', YoutubeController.store);

module.exports = routes;