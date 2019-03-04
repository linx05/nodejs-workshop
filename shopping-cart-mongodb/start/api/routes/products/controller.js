const Product = require('./model')

async function getProducts(req, res) {
  const products = await Product.getProducts()
  if (products) {
    return res.json(products)
  }
  return res.sendStatus(404)
}

async function getProduct(req, res) {
  const product = await Product.getProduct(req.params.productId)
  if (product) {
    return res.json(product)
  }
  return res.sendStatus(404)
}

module.exports = {
  getProducts,
  getProduct,
}
