const express = require('express')
const route = express.Router()

const booksController = require('../app/controllers/booksController')

route.get('/create', booksController.create)
route.post('/store', booksController.store)
route.get('/:id/edit', booksController.edit)
route.post('/handle-form-actions', booksController.handleFormActions)
route.post('/handle-form-trash', booksController.handleFormTrash)
route.put('/:id', booksController.update)
route.patch('/:id/restore', booksController.restore)
route.delete('/:id', booksController.destroy)
route.delete('/:id/force', booksController.forceDestroy)
route.get('/:slug', booksController.show)

module.exports = route
