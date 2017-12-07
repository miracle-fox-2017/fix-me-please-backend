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
    let booklist = req.body.booklist.split(',')
    var transaction = new Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      price: req.body.price,
      booklist: booklist
    });
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
    });
  },
  update: function(req, res) {
    let booklist = req.body.booklist.split(',')
    if(booklist.length > 1){
      Transaction.update({ _id: req.params.id }, {
        $set: {
          memberid: req.body.memberid,
          days: req.body.days,
          price: req.body.price,
          booklist: booklist
        }
      }, function(err, result) {
        if (err) {
          res.send({err: err})
        }
        res.send(result)
      });
    }else{
      Transaction.update({
        _id: req.params.id
      }, {
        $set: {
          memberid: req.body.memberid,
          days: req.body.days,
          price: req.body.price,
          booklist: req.body.booklist
        }
      }, function(err, result) {
        if (err) {
          res.send({err: err})
        }
        res.send(result)
      })
    }
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
