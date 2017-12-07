var mongoose = require('mongoose');
var Schema = mongoose.Schema

var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: {type:Number},
  stock: {type:Number}
});

var Book = mongoose.model('book', bookSchema);

module.exports = Book
