const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {type:String},
  img: [{type:String}],
  description: [{type:String}],
  price: {type:Number},
  stock: {type:Number}

});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
