const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');

routes.post('/user/login', userController.login);
routes.post('/user/register', userController.register);
routes.get('/user/list', userController.list);


module.exports = routes;