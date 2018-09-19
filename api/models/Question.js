const mongoose = require('mongoose');

const Question = new mongoose.Schema({
  id: { type: Number, default: 0 },
  a: { type: String, default: '' },
  b: { type: String, default: '' },
  c: { type: String, default: '' },
  d: { type: String, default: '' },
  e: { type: String, default: '' },
  category: { type: String, default: '' },
  correct: { type: String, default: '' },
  question: { type: String, default: '' },
});

module.exports = mongoose.model('Question', Question);