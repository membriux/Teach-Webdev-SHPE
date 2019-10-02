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


router.post('/', (req, res, next) => {

  const item = new Item();

  item.name = req.body.name;
  item.description = req.body.description.split('\r\n');
  item.price = req.body.price;
  item.stock = req.body.stock;




  if (req.files) {
    var images = req.files.img;
    if(Array.isArray(images)){
      for(var i = 0; i < images.length; i++){

        var itemImage = images[i];
        item.img.push(itemImage.name);

        itemImage.mv('./public/images/'+itemImage.name, function(err){
          if(err) {console.log(err)};
        });

      }
    }else{

      item.img.push(images.name);

      images.mv('./public/images/'+images.name, function(err){
        if(err) {console.log(err)};
      });
    }
}



  item.save(function(err, item){
      if(err) { console.log(err)};
      return res.redirect('items/');
  });



});

module.exports = router;
