
// STEP 2: Build Item Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  location: {type:String, required:true},
  price: {type:Number, required:true},
  img: {data:Buffer, contentType:String},

});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
