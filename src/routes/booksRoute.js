const express = require('express')
const route = express.Router()

const booksController = require('../app/controllers/booksController')

route.get('/create', booksController.create)
route.post('/store', booksController.store)
route.get('/:id/edit', booksController.edit)
route.put('/:id', booksController.update)
route.delete('/:id', booksController.destroy)
route.get('/:slug', booksController.show)

module.exports = route
