const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerUser') 

route.get('/', controller.findAll)
route.post('/add', controller.addUser)


module.exports = route