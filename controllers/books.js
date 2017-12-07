const Book = require("../models/Book")

class BookCtrl {

	static all (req, res) {
		Book.find()
			.then(books => res.status(200).send(books))
			.catch(err => res.status(500).send(err))  
	}

	static create (req, res) {
		var book = new Book(req.body)
		book.save()
			.then(result => res.status(200).send(result))
			.catch(err => res.status(500).send(err))
	}
	
	static update (req, res) {
		Book.update({ _id: req.id }, {
			$set: req.body
		}, function(err, result) {
			if (err) {
				res.status(500).send(err)
			}
			res.status(500).send(result)
		})
	}

	static delete (req, res) {
		Book.remove({ _id: req.id }, function (err, result) {
			if (err) {
				res.status(500).send(err)
			}
			res.status(200).send(result)
		})
	}
}


module.exports = BookCtrl
