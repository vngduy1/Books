const Books = require("../models/Books");
const { mongooseToObject } = require("../../util/mongoose");

class booksController {
  show(req, res, next) {
    Books.findOne({ slug: req.params.slug })
      .then((book) =>
        res.render("books/showBook", { book: mongooseToObject(book) })
      )
      .catch(next);
  }

  //GET
  create(req, res, next) {
    res.render("books/createBook");
  }

  //POST
  store(req, res, next) {
    const book = new Books(req.body);
    book.save().then(() => res.redirect("/site"));
  }

  //GET
  edit(req, res, next) {
    Books.findById(req.params.id)
      .then((book) =>
        res.render("books/editBook", { book: mongooseToObject(book) })
      )
      .catch(next);
  }

  //UPDATE
  update(req, res, next) {
    Books.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/books"))
      .catch(next);
  }
}

module.exports = new booksController();
