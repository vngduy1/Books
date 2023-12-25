const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Books = new Schema(
  {
    title: { type: String, require: true, min: 3, max: 50, default: "" },
    description: { type: String, require: true, min: 3, default: "" },
    type: { type: String, require: true, min: 3, max: 20 },
    image: { type: String, require: true },
    slug: { type: String, slug: "title", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", Books);
