var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = Schema({
  memberId: String,
  days: String,
  date: { type: Date, default: Date.now },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
