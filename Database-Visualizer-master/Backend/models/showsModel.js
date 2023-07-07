const { Schema, model } = require("../connection");

const mySchema = new Schema({
  title: String,
  duration: String,
  // type:String,
  genre: String,
  publisher: String,
  reviews: Number,
  ratings: Number,
  views: Number,
  createdAt: Date,
});
module.exports = model("shows", mySchema);
