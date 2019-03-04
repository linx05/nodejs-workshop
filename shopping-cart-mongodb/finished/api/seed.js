exports = module.exports = () => {
  console.log('running migrations');
  const Product     = require('./routes/products/model').Product;
  const ProductSeed = require('./routes/products/mock_data');

  Product.create({});

  Product.find({}).deleteMany(function () {
    Product.create(ProductSeed).catch((e) => {
      console.log(e);
    });
  })
};
