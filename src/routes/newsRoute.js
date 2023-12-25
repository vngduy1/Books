const express = require('express')
const route = express.Router()

const newsController = require('../app/controllers/newsController')

route.get('/:slug', newsController.show).get('/', newsController.index)

module.exports = route
