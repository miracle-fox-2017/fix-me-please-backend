const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://harynp:harynp@pratice-shard-00-00-vajls.mongodb.net:27017,pratice-shard-00-01-vajls.mongodb.net:27017,pratice-shard-00-02-vajls.mongodb.net:27017/livecoding?ssl=true&replicaSet=Pratice-shard-0&authSource=admin', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000, function () {
  console.log('SERVER JALAN');
})
