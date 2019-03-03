import PropTypes from 'prop-types'
import React from 'react'
import { ListGroup } from 'reactstrap'
import CartProduct from '../cartProduct'
import CartItemPropType from '../../../propTypes/cartItem'

const CartProductList = ({ items, onDelete, onChangeQuantity }) => {
  return (<div>
    <ListGroup>
    {
      items.map(cartItem => (
        <CartProduct
          item={cartItem}
          onDelete={onDelete}
          onChangeQty={onChangeQuantity}
          key={cartItem.item.id}
        />
      ))
    }
    </ListGroup>
  </div>)
}

CartProductList.propTypes = {
  items: PropTypes.arrayOf(CartItemPropType),
  onDelete: PropTypes.func,
  onChangeQuantity: PropTypes.func,
}

export default CartProductList
