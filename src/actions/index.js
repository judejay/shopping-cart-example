import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import ProductDataService from '../services/products.service'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => async dispatch => {
  try {
    const res = await ProductDataService.getAll();
    console.log("allProducts", res);
    dispatch({
      type: types.RECEIVE_PRODUCTS,
       res,
    });

  } catch (error) {
    //console.log(error.response)

  }
  // shop.getProducts(products => {
  //   dispatch(receiveProducts(products))
  // })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
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
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(removeFromCartUnsafe(productId))
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
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const changeQty = (productId, qty) => (dispatch, getState) => {
  const qtyDiff = qty - getState().cart.quantityById[productId] //選取的數量 - 原本的數量
  dispatch({
    type: types.CHANGE_QTY,
    productId,
    qtyDiff
  })
}

