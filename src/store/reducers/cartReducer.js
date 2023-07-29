const cartData = {
  cartBooksData: [],
}
export default function cartReducer(state = cartData, action) {
  const {payload, type} = action
  if (type === 'CART') {
    return {...state, ...payload}
  }
  return state
}
