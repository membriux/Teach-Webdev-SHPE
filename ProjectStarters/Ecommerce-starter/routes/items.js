
// ––––– STEP 3: Get/Add items for sale



// –––––– Create file for storing image



// –––––– STEP 4: Get all Items
router.get('/', function(req, res, next) {

});


router.get('/new', function(req, res, next) {
  res.render('items/new');
});


// BONUS: Implement Stipe API
router.get('/payment' ,(req,res,next) =>{
  stripe.charges.create(
    {
      amount:500,
      currency:'usd',
      source:'tok_visa_debit',
      shipping:{
        address:{
          line1:'45 N Adams Ave',
        },
        name:'John Doe',
        phone:'15597863254',
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


// –––––– STEP 5: Get Specific Item for sale
router.get('/:id', function(req,res,next){



});

// STEP 6: POST Method to upload new item for sale
router.post('/', upload.single('image'),  (req, res, next) => {


});


module.exports = router;
