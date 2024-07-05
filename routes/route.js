const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerUser') 

route.post('/', controller.findUser)


module.exports = route