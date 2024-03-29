const Books = require('../models/Books')
const { mongooseToObject } = require('../../util/mongoose')

class booksController {
  show(req, res, next) {
    Books.findOne({ slug: req.params.slug })
      .then((book) =>
        res.render('books/showBook', { book: mongooseToObject(book) }),
      )
      .catch(next)
  }

  //GET
  create(req, res, next) {
    res.render('books/createBook')
  }

  //POST
  store(req, res, next) {
    const book = new Books(req.body)
    book.save().then(() => res.redirect('/me/stored/books'))
  }

  //GET
  edit(req, res, next) {
    Books.findById(req.params.id)
      .then((book) =>
        res.render('books/editBook', { book: mongooseToObject(book) }),
      )
      .catch(next)
  }

  //UPDATE
  update(req, res, next) {
    Books.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/books'))
      .catch(next)
  }

  //DELETE
  destroy(req, res, next) {
    Books.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //DELETE/bookId/:id/force
  forceDestroy(req, res, next) {
    Books.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //PATCH/ books/:id/restore
  restore(req, res, next) {
    Books.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //POST books/handle-form-actions"
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Books.delete({ _id: { $in: req.body.bookIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      default:
        res.json({ message: 'action is invalid!' })
    }
  }

  handleFormTrash(req, res, next) {
    switch (req.body.action) {
      case 'restore':
        Books.restore({ _id: { $in: req.body.bookIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      case 'destroy':
        Books.deleteMany({ _id: { $in: req.body.bookIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      default:
        res.json({ message: 'action is invalid!' })
    }
  }
}

module.exports = new booksController()
