const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'book' }]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
