const Product = require('./model').Product

async function getProducts(req, res) {
  const products = await Product.find({}).exec()
  if (products) {
    return res.json(products)
  }
  return res.sendStatus(404)
}

async function getProduct(req, res) {
  const product = await Product.findOne({ id: req.params.productId }).exec()
  if (product) {
    return res.json(product)
  }
  return res.sendStatus(404)
}

module.exports = {
  getProducts,
  getProduct,
}
