const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/api-crud-mongoose", (err) => {
	err ? console.log("Can\'t connect to database") : console.log("Database connected")
})

var books = require("./routes/books")
var transactions = require("./routes/transactions")

app.use("/books", books)
app.use("/transactions", transactions)

app.listen(3000)
