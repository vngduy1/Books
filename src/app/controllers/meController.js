const Books = require('../models/Books')
const { multipleMongooseToObject } = require('../../util/mongoose')

class meController {
  //GET/me/stored/books
  storedBooks(req, res, next) {
    Promise.all([
      Books.find({}),
      Books.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([books, deletedBook]) =>
        res.render('me/storedBooks', {
          deletedBook,
          books: multipleMongooseToObject(books),
        }),
      )
      .catch(next)

    // Books.countDocumentsWithDeleted({ deleted: true })
    //   .then((deletedBook) => {
    //     console.log(deletedBook)
    //   })
    //   .catch(next)

    // Books.find({})
    //   .then((books) =>
    //     res.render('me/storedBooks', {
    //       books: multipleMongooseToObject(books),
    //     }),
    //   )
    //   .catch(next)
  }

  //GET/me/trash/books
  trashBooks(req, res, next) {
    Books.findWithDeleted({ deleted: true })
      .then((books) =>
        res.render('me/trashBooks', {
          books: multipleMongooseToObject(books),
        }),
      )
      .catch(next)
  }
}

module.exports = new meController()
