const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/', controller.getCart)
router.post('/:itemId', controller.addToCart)
router.put('/:itemId', controller.updateCartItem)
router.delete('/:itemId', controller.deleteFromCart)
router.delete('/', controller.emptyCart)

module.exports = router
