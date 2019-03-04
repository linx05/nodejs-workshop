import PropType from 'prop-types'
import ProductPropType from './product'
import CartItemPropType from './cartItem'

export default {
  items: PropType.arrayOf(CartItemPropType),
  subTotal: PropType.number,
  total: PropType.number,
}
