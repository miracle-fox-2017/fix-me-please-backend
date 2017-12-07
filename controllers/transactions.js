//require model
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
    });
  },
  update: function(req, res) {
    Transaction.findOne({ _id: req.params.id }, function (err, trans) {
      if (err) {
        res.send({err: err})
      }
      console.log(trans.date)
      var dateRent = new Date(trans.date)
      var numberOfDaysToAdd = trans.days
      var returnDate = dateRent.setDate(dateRent.getDate() + numberOfDaysToAdd)
      console.log(new Date(returnDate) - new Date())
      Transaction.update({ _id: req.params.id }, {
        $set: req.body
      }, function(err, result) {
        if (err) {
          res.send({err: err})
        }
        res.send(result)
      });

    })
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
