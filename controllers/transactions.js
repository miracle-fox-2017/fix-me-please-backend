const Transaction = require('../models/Transaction')

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
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    })
  },
  update: function(req, res) {
    Transaction.update({ _id: req.id }, {
      $set: {
        memberid:req.body.memberid,
        days:req.body.days,
        price: req.body.price,
        booklist: req.body.booklist
      }
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
        res.send(result)
      
    })
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }else{
        res.send(result)

      }
    })
  }
}
