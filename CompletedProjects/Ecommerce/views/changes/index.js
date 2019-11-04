var express = require('express');
var router = express.Router();
const Item = require('../models/item');


// ––––––– STEP 2: Route user to main page
/* GET home page. */
router.get('/', function(req, res, next) {
  // Item.find({},  function(err, items) {
  //   if(err) {
  //     console.error(err);
  //   } else {
  //     res.render('items/index', { items: items });
  //   }
  // });
  res.redirect('/login')
});

// Login User
router.get('/login', (req, res, next) => {
  res.render('login');
});


// POST login
router.post('/login', (req, res, next) => {
  User.authenticate(req.body.username, req.body.password, (err, user) => {
    if (err || !user) {
      const next_error = new Error("Username or password incorrect");
      next_error.status = 401;

      return next(next_error);
    } else {
      req.session.userId = user._id;

      return res.redirect('items/') ;
    }
  });
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
