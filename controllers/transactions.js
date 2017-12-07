const Transaction = require('../models/Transaction')


  function all(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      }
      res.send(transactions)
    })
  }

  function create(req, res) {
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    });
  }

  function update(req, res) {
    Transaction.findOne({
      _id:req.params.id
    })
    .then(transaction => {
      transaction.set({
          memberid: req.body.memberid || transaction.memberid,
          days: req.body.days || transaction.days,
          price: req.body.price || transaction.price,
          booklist: transaction.booklist       
      })
      if(req.body.booklist){
        transaction.booklist.push(req.body.booklist)
      }
      transaction.save()
      res.send(transaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  function remove(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
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
