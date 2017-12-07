const mongoose = require("mongoose")

const booksSchema = mongoose.Schema({
	isbn: String,
	title: String,
	author: String,
	category: Number,
	stock: Number
})

var Book = mongoose.model("Book", booksSchema)

module.exports = Book
