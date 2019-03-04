const _ = require('lodash')
const mockData = require('./mock_data')

async function getProducts() {
  return mockData
}

async function getProduct(id) {
  return _.find(mockData, product => product.id == id)
}


module.exports = {
  getProducts,
  getProduct,
}
