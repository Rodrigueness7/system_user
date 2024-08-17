const express = require('express');
const route = express.Router();
const controller = require('../controller/controllerUser');

route.get('/', controller.findAll);
route.get('/find/:id', controller.findByUser);
route.post('/add', controller.addUser);
route.put('/update/:id', controller.updateUser);
route.delete('/delete/:id', controller.removeUser);


module.exports = route;