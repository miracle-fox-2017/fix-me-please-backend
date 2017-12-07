const Book = require('../models/Book')


  function all(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.send(books)
    })
  }

  function create(req, res) {
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }

  function update(req, res) {
    Book.findOne({
      _id:req.params.id
    })
    .then(book => {
      book.set({
          isbn: req.body.isbn || book.isbn,
          title: req.body.title || book.title,
          author: req.body.author || book.author,
          category: req.body.category || book.category,
          stock: req.body.stock || book.stock        
      })
      book.save()
      res.send(book)
    })
    .catch(err => {
      res.send(err)
    })
  }

  function remove(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }

module.exports = {
  all,
  create,
  update,
  remove
}  

