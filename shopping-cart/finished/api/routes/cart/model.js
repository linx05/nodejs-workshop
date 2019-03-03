const _ = require('lodash')

const defaultUserCart = {
  items: [],
  total: 0,
}

const CartStore = {
  //UserIds...
  /*
  items: [{ item: {}, qty: 1 }],
  total
   */
}

function calculateTotals(cartItems) {
  return cartItems.reduce((total, cartItem) => {
    return total + (cartItem.item.price * cartItem.qty)
  }, 0)
}

function getCart(userId) {
  let userCart = CartStore[userId]
  if (!userCart) {
    userCart = {...defaultUserCart}
    CartStore[userId] = userCart
  }
  return userCart
}

function setUserCart(userId, cart) {
  CartStore[userId] = cart
  return cart
}

async function removeItemFromCart(userId, itemId) {
  const itemsWithoutRemoved = getCart(userId).items.filter(cartItem => {
    return cartItem.item.id !== Number.parseInt(itemId)
  })
  const newTotal = calculateTotals(itemsWithoutRemoved)
  return setUserCart(userId, { items: itemsWithoutRemoved, total: newTotal })
}

async function addItemToCart(userId, item, amount = 1) {
  const itemAlreadyExists = getCart(userId).items.find(userItem => userItem.item.id === item.id)
  if (itemAlreadyExists) {
    return updateItemQty(userId, item.id, amount + itemAlreadyExists.qty)
  }
  const itemsList = [...getCart(userId).items, { item, qty: amount }]
  const newTotal = calculateTotals(itemsList)
  return setUserCart(userId, { items: itemsList, total: newTotal })
}

async function updateItemQty(userId, itemId, amount) {
  const itemsList = getCart(userId).items.map(cartItem => {
    if (cartItem.item.id === Number.parseInt(itemId)) {
      return { item: cartItem.item, qty: amount }
    }
    return cartItem
  })
  const newTotal = calculateTotals(itemsList)
  return setUserCart(userId, { items: itemsList, total: newTotal })
}

async function emptyCart(userId) {
  return setUserCart(userId, defaultUserCart)
}


module.exports = {
  getCart,
  removeItemFromCart,
  addItemToCart,
  updateItemQty,
  emptyCart,
}
