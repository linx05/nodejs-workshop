import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from 'reactstrap'
import './index.css'

const CartIcon = ({ cart }) => {
  return (<span>
    Cart <FontAwesomeIcon icon="shopping-cart" />
    <Badge color="danger" className="cart-amount-badge">{cart.items.length}</Badge>
  </span>)
}

CartIcon.defaultProps = {
  cart: {
    items: [],
  }
}

CartIcon.propTypes = {

}

export default CartIcon
