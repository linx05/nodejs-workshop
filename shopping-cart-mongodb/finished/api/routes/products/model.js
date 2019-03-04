const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  price: String,
  imageUrl: String,
});

const Product = mongoose.model('products', ProductSchema)


module.exports = {
  Product,
  ProductSchema,
}
