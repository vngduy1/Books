const Books = require('../models/Books')
const { multipleMongooseToObject } = require('../../util/mongoose')

class meController {
    //GET/me/stored/books
    storedBooks(req, res, next) {
        Books.find({})
            .then((books) =>
                res.render('me/storedBooks', {
                    books: multipleMongooseToObject(books),
                }),
            )
            .catch(next)
    }
}

module.exports = new meController()
