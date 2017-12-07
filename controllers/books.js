const Book = require('../models/Book')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.send(books)
    })
  },
  create: function(req, res) {
    // console.log(req.body);
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    console.log(req.params);
    console.log(req.body);

    let id = { _id: ObjectId(req.params.id)}
    Book.findById(id)
    .then(book => {
      console.log(book);
      book.isbn = req.body.isbn || book.isbn,
      book.title = req.body.title || book.title,
      book.author = req.body.author || book.author,
      book.category = req.body.category || book.category,
      book.stock = req.body.stock || book.stock

      book.save()
      .then(result => {
        console.log(result)
        res.send(result)
      })
      .catch(err => res.send(err))
    })
    // Book.findById({ _id: req.id }, {
    //   $set: {req.body}
    // }, function(err, result) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(result)
    // });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
