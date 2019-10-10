const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  location: {type:String, required:true},
  price: {type:Number, required:true},
  img: {type:String, required:true},

});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
