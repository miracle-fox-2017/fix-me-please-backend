const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const books = require('./routes/books');
// var transactions = require('routes/transactions');

app.use('/books', books);
// app.use('/transactions', transactions);

app.listen(3000, console.log('Listen on port 3000'))
