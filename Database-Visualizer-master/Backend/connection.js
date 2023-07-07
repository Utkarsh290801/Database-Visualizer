const mongoose = require("mongoose");

const url =
  "mongodb+srv://utarora:mansha@cluster0.wmuj9.mongodb.net/DatabaseVisiualizer?retryWrites=true&w=majority";

//promise
mongoose
  .connect(url) //this line is used to connect with database   to server
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
