const express = require("express");
const path = require("path");
var morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const methodOverride = require("method-override");

const route = require("./routes/index");
const db = require("./config/db/mongodb");

const port = 3000;
db.connect();

app.use(methodOverride("_method"));

// Đường dẫn đến thư mục chứa các file tĩnh (ví dụ: CSS, hình ảnh)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })).use(express.json());

// Sử dụng middleware morgan với định dạng 'dev' hoặc 'combined'
// app.use(morgan("dev"));

// Cấu hình Express để sử dụng Handlebars làm view engine
app
  .engine(
    "hbs",
    handlebars.engine({
      extname: ".hbs",
      helpers: {
        sum: (a, b) => a + b,
      },
    })
  )
  .set("view engine", "hbs")
  .set("views", path.join(__dirname, "resources", "views"));

//import route
route(app);

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
