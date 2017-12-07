const Transaction = require('../models/Transaction')

module.exports = {
  all: function(req, res) {
    Transaction.find().populate('booklist').exec().then(function (transactions) {
      res.status(200).send(transactions)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  create: function(req, res) {
    var transaction = new Transaction(
      {
        memberId: req.body.memberId,
        days: req.body.days,
        date: req.body.date,
        price: req.body.price,
        booklist: req.body.booklist
      }
    );
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
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
