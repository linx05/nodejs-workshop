const mongoose = require('mongoose')
const ProductSchema = require('../products/model').ProductSchema

const defaultUserCart = {
  items: [],
  total: 0,
}

const CartSchema = new mongoose.Schema({
  userId: String,
  items: [{
    item: ProductSchema,
    qty: Number,
  }],
  total: Number,
})

function calculateTotals(cartItems) {
  return cartItems.reduce((total, cartItem) => {
    return total + (cartItem.item.price * cartItem.qty)
  }, 0)
}

CartSchema.statics.getCart = async function (userId) {
  let userCart = await this.findOne({ userId: userId }).exec()
  if (!userCart) {
    userCart = await new Cart({ ...defaultUserCart, userId: userId }).save()
  }
  return userCart
}

CartSchema.statics.addItemToCart = async function (userId, item, amount = 1) {
  const cart = await this.getCart(userId)
  const itemAlreadyExists = cart.items.find(userItem => userItem.item.id === item.id)
  if (itemAlreadyExists) {
    return this.updateItemQty(userId, item.id, amount + itemAlreadyExists.qty)
  }
  cart.items = [...cart.items, { item, qty: amount }]
  cart.total = calculateTotals(cart.items)
  return cart.save()
}

CartSchema.statics.removeItemFromCart = async function(userId, itemId) {
  const cart = await this.getCart(userId)
  cart.items = cart.items.filter(cartItem => {
    return cartItem.item.id !== itemId
  })
  cart.total = calculateTotals(cart.items)
  return cart.save()
}

CartSchema.statics.updateItemQty = async function(userId, itemId, amount) {
  const cart = await this.getCart(userId)
  cart.items = cart.items.map(cartItem => {
    if (cartItem.item.id === itemId) {
      return { item: cartItem.item, qty: amount }
    }
    return cartItem
  })
  cart.total = calculateTotals(cart.items)
  return cart.save()
}

CartSchema.statics.emptyCart = async function(userId) {
  const cart = await this.getCart(userId)
  cart.items = defaultUserCart.items
  cart.total = defaultUserCart.total
  return cart.save()
}

const Cart = mongoose.model('carts', CartSchema)

module.exports = {
  Cart,
}
