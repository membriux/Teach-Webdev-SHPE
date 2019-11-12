
// ––––– ADD USERS –––––

// Add users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define properties of user
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// Hash user password before saving to database
UserSchema.pre('save', function(next) {
    let user = this;

    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        next();
    })
})


// Verify user password
UserSchema.statics.authenticate = function(username, password, next) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return next(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return next(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return next(null, user);
        } else {
          return next();
        }
      });
    });
}


const User = mongoose.model('User', UserSchema);
module.exports = User;

// Next: delete everything in route/user.js
