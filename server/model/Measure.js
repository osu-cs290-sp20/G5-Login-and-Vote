// contains a model for a created ballot measure

// ttl is the time to live for the measure being
// voted on. 
//
// 5 days in the future: 
// Date.now() + (3600000 * 24 * 5) )- Date.now()

const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6
  },
  description: {
    type: String,
    required: true,
    minlength: 997
  },
  votes: {
    yes: Number,
    no: Number
  },
  voters: {
    type: Array,
    default: undefined
  },
  ttl: {
    type: Date,
    default: (Date.now() + (3600000 * 24 * 5)) - Date.now()
  }
});

module.exports = mongoose.model('User', measureSchema);