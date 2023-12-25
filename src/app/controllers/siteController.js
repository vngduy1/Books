const Books = require("../models/Books");
const { multipleMongooseToObject } = require("../../util/mongoose");

class siteController {
  //GET /index
  index(req, res, next) {
    Books.find({})
      .then((book) =>
        res.render("home", { book: multipleMongooseToObject(book) })
      )
      .catch(next);
  }

  //GET /:slug
  show(req, res) {
    res.send("site detail");
  }
}

module.exports = new siteController();
