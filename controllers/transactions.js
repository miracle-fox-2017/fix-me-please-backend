const Transaction = require("../models/Transaction")

class TransactionCtrl {

	static all (req, res) {
		Transaction.find(function (err, transactions) {
			if (err) {
				res.send({err: err})
			}
			res.send(transactions)
		})
	}

	static create (req, res) {
		var transaction = new Transaction(req.body)
		transaction.save(function (err, result) {
			if (err) {
				res.send({err: err})
			}
			res.send(result)
		})
	}

	static update (req, res) {
		Transaction.update({ _id: req.params.id }, {
			$set: req.body
		}, function(err, result) {
			if (err) {
				res.send({err: err})
			}
			res.send(result)
		})
	}

	static delete (req, res) {
		Transaction.remove({ _id: req.params.id }, function (err, result) {
			if (err) {
				res.send({err: err})
			}
			res.send(result)
		})
	} 
}

module.exports = TransactionCtrl
