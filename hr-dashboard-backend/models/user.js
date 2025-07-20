const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['admin', 'client'],
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.models.User || mongoose.model("User", userSchema);