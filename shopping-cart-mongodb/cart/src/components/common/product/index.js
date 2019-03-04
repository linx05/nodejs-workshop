import PropTypes from 'prop-types'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardImg, Button} from 'reactstrap'
import ProductPropType from '../../../propTypes/product'
import './index.css'

const Product = ({ product, onAdd }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{product.title}</CardTitle>
          <CardSubtitle className="product-subtitle">${product.price}</CardSubtitle>
          {
            product.imageUrl &&
            <CardImg top width="100%" src={product.imageUrl} alt={product.title} />
          }
          <CardText className="product-description">{product.description}</CardText>
          <Button onClick={() => onAdd(product.id)}>Add</Button>
        </CardBody>
      </Card>
    </div>
  )
}

Product.propTypes = {
  Product: ProductPropType,
  onAdd: PropTypes.func,
}

export default Product
