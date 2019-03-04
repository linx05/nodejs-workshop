const Cart = require('./model').Cart
const Product = require('../products/model').Product

async function getCart(req, res) {
  const userId = req.get('userId')
  const cart = await Cart.findOne({ userId: userId }).exec()
  if (cart) {
    return res.json(cart)
  }
  return res.sendStatus(400)
}

async function addToCart(req, res) {
  const userId = req.get('userId')
  const itemId = req.params.itemId
  const qty = req.body.qty
  const item = await Product.findOne({ id: itemId }).exec()
  if (item) {
    const cart = await Cart.addItemToCart(userId, item, qty)
    return res.json(cart)
  }
  return res.sendStatus(400)
}

async function updateCartItem(req, res) {
  const userId = req.get('userId')
  const itemId = req.params.itemId
  const qty = req.body.qty
  const cart = await Cart.updateItemQty(userId, itemId, qty)
  if (cart) {
    return res.json(cart)
  }
  return res.sendStatus(400)
}

async function deleteFromCart(req, res) {
  const userId = req.get('userId')
  const itemId = req.params.itemId
  const cart = await Cart.removeItemFromCart(userId, itemId)
  if (cart) {
    return res.json(cart)
  }
  return res.sendStatus(400)
}

async function emptyCart(req, res) {
  const userId = req.get('userId')
  const cart = await Cart.emptyCart(userId)
  if (cart) {
    return res.json(cart)
  }
  return res.sendStatus(400)
}

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  deleteFromCart,
  emptyCart,
}
