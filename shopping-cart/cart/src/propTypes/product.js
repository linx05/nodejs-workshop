import PropTypes from 'prop-types'

export default PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageUrl: PropTypes.string,
})
