import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  inventory: PropTypes.number,

 // onQtySelected: PropTypes.func.isRequired,
  //onRemoveFromCartClicked: PropTypes.func.isRequired,


}

export default Product