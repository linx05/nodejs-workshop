import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'reactstrap'
import Product from '../product'
import ProductPropType from '../../../propTypes/product'
import './index.css'

const ProductList = ({ products, onAddProduct }) => {
  return (<div>
    <Row>
      {
        products.map((product) => {
          return (
            <Col sm="6" md="4" key={product.id} className="product-row">
              <Product product={product} onAdd={onAddProduct} />
            </Col>
          )
        })
      }
    </Row>
  </div>)
}

Product.propTypes = {
  Products: PropTypes.arrayOf(ProductPropType),
  onAddProduct: PropTypes.func,
}

export default ProductList
