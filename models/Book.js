var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
