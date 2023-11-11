const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const userRoute = require("./routes/user-route") // user Route
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
app.use("/user", userRoute); // user Route (register and login)

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/bookstore"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
