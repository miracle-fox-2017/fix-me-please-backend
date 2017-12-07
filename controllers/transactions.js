const Transaction = require('../models/Transaction');
module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      }
      res.send(transactions)
    })
  },
  create: function(req, res) {
    Transaction.create({
      memberid: req.body.memberid,
      days: req.body.days,
      price: req.body.price,
      booklist: req.body.booklist
    }).then((hasil) => {
      res.send(hasil)
    }).catch((err) => {
      res.send(err)
    })
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      memberid: req.body.memberid,
      days: req.body.days,
      price: req.body.price,
      booklist: req.body.booklist
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
