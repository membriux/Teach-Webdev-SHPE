var express = require('express');
var router = express.Router();
const Item = require('../models/item');
const User = require('../models/user');


// ––––––– STEP 2: Route user to main page
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

// Login User
router.get('/login', (req, res, next) => {
  res.render('login');
});


// POST login
router.post('/login', (req, res, next) => {

  // User Clicks on "Login"
  if('login' in req.body) {
    User.authenticate(req.body.username, req.body.password, (err, user) => {
      if (err || !user) {
        const next_error = new Error("Username or password incorrect");
        next_error.status = 401;

        return next(next_error);
      } else {
        return res.redirect('items/');
        }
    });

  }

  // User clicks "Signup"
  else if('signup' in req.body) {
    const user = new User(req.body);

    user.save(function(err, user) {
      if(err) console.log(err);
      return res.redirect('items/');
    });
  }

});

router.post('/login', (req, res, next) => {
  res.redirect('items/index');
});
// exports.requireLogin = (req, res, next) => {
//   if(req.session && req.session.userId) {
//     return next();
//   } else {
//     let err = new Error('You must log in to view this page');
//     err.status = 401;
//     return res.redirect('/login');
//   }
// }



module.exports = router;
