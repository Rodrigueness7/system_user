const express = require('express');
const route = express.Router();
const controller = require('../controller/controllerUser');

route.get('/login', controller.login)
route.get('/findAll', controller.findAll);
route.get('/find/:id', controller.findByUser);
route.post('/register', controller.addUser);
route.put('/update/:id', controller.updateUser);
route.delete('/delete/:id', controller.removeUser);


module.exports = route;