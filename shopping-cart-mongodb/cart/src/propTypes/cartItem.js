import PropType from 'prop-types'
import ProductPropType from './product'

export default PropType.shape({
  item: ProductPropType,
  qty: PropType.number,
})
