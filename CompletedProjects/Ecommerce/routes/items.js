var express = require('express');
var router = express.Router();
const Item = require('../models/item');
const upload = require('express-fileupload');

router.get('/', function(req, res, next) {
  Item.find({},  function(err, items) {
    if(err) {
      console.error(err);
    } else {
      res.render('items/index', { items: items });
    }
  });
});

router.get('/new', function(req, res, next) {
  res.render('items/new');
});

router.get('/:id', function(req,res,next){
  Item.findById(req.params.id, function(err, item){
    if(err){console.log(err);}
    res.render('items/show',{item:item, itemid:req.params.id});
  });
});


router.post('/', (req, res, next) => {
//add new items
  const item = new Item(req.body);

  item.save(function(err, item){
      if(err) { console.log(err)};
      return res.redirect('items/');
  });
});




module.exports = router;
