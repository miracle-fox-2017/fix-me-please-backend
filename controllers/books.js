const Book = require('../models/Book');

module.exports = {
  all: function(req, res) {
    Book.find()
      .then(books => res.send({
        msg: 'berhasil',
        books: books
      }))
      .catch(err => res.send({err:err}))
  },
  create: function(req, res) {
    // console.log(req)
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send({result})
    });
  },
  update: function(req, res) {
    console.log(req.body);
    Book.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      console.log(result)
      res.send(result)
    });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}


// function (err, books) {
//   if (err) {
//     res.send({err: err})
//   }
//   res.send(books)
// }
