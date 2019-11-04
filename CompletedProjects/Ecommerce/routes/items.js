var express = require('express');
var router = express.Router();
const Item = require('../models/item');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
const stripe = require("stripe")("sk_test_VrukSjUwwp7W8rJUr3KbgaiD002agmaeb0");


const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage: storage});


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

router.get('/:id/payment' ,(req,res,next) =>{
  Item.findById(req.params.id, function(err, item){
    if(err){console.log(err);}
    res.render('items/payment',{item:item});
  });
});

router.get('/:id', function(req,res,next){
  Item.findById(req.params.id, function(err, item){
    if(err){console.log(err);}
    res.render('items/show',{item:item});
  });
});


router.post('/', upload.single('image'),  (req, res, next) => {
//add new items

  var item = new Item(req.body);
  var img = fs.readFileSync(req.file.path).toString('base64');
  item.img.data = img ;
  item.img.contentType = req.file.mimetype;


  item.save(function(err, item){
      if(err) { console.log(err)};
      return res.redirect('items/');
  });
});

router.post('/:id/payment', (req, res, next) => {
  stripe.charges.create(
    {
      amount:req.body.price,
      currency:'usd',
      source:'tok_visa_debit',
      shipping:{
        address:{
          line1:req.body.address,
        },
        name:req.body.name,
        phone:req.body.phone,
      },
      description:'test charge',
    },
    function(err, charge){
      if(err) {console.log(err);}
      console.log(charge);
    }
  );
  res.redirect('/items')
});



module.exports = router;
