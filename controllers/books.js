const Book = require('../models/Book')

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
    console.log(req.bod)
    // var book = new Book({
    //   isbn : req.body.isbn,
    //   title : req.body.title,
    //   author : req.body.author,
    //   category: req.body.category,
    //   stock: req.body.stock
    // });
    // book.save(function (err, result) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(result)
    // });
  },
  update: function(req, res) {
    Book.update({ _id: req.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
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
