var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: Number,
  stock: Number
});

var Book = mongoose.model('Books', bookSchema);

module.exports = Book
