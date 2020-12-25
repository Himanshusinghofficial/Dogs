const mongoose = require('mongoose');

const DogsSchema = mongoose.Schema({
  dog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dogs' //refer
  },
  dogimg: {
     type: String,
     require: true
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
 
});

module.exports = mongoose.model('dog', DogsSchema);
