import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import  cart  from '../reducers/cart'

const ProductItem = ({ product, onAddToCartClicked, onRemoveFromCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? '+' : 'Sold Out'}
    </button>
    <button
      onClick={onRemoveFromCartClicked}
      //disabled={cart > 0 ? '' : 'disabled'}>
     //</div> {product.inventory > 0 ? '-' : 'Sold Out'}
>
  -
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired

}

export default ProductItem
