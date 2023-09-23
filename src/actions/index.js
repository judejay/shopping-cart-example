import * as types from '../constants/ActionTypes'
import ProductDataService from '../services/products.service'



export const getAllProducts = () => async dispatch => {
  try {
    const res = await ProductDataService.getAll();
    dispatch({
      type: types.RECEIVE_PRODUCTS,
       res,
    });

  } catch (error) {

  }

}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

const reduceFromCartUnsafe = productId => ({
  type: types.REDUCE_FROM_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  console.log("added to cart")
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = productId => (dispatch, getState) => {
  console.log("removed from cart")
  if (getState().cart.quantityById[productId] === 1) {
    dispatch(removeFromCartUnsafe(productId))
  }
  if (getState().cart.quantityById[productId] > 1 ) {
    dispatch(reduceFromCartUnsafe(productId))
  }

}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}



