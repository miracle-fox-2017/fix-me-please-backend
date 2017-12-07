const ObjectId = require('mongoose').Types.ObjectId;
const Transaction = require('../models/Transaction');

module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      }
      res.send(transactions)
    }).populate('booklist')
  },
  create: function(req, res) {
    var transaction = new Transaction({
      memberid:req.body.memberid,
      days:req.body.days,
      date:req.body.date,
      price:req.body.price,
      booklist:req.body.booklist.split(',')
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
    Transaction.update({ '_id': ObjectId(req.params.id) }, {
      memberid:req.body.memberid,
      days:req.body.days,
      date:req.body.date,
      price:req.body.price,
      booklist:req.body.booklist.split(',')
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.deleteOne({ '_id': ObjectId(req.params.id) }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
