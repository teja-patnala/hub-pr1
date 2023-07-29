import {combineReducers} from 'redux'
import homeReducer from './homeReducer'
import bookDataReducers from './bookDataReducers'
import loginReducer from './loginReducer'
import bookshelfReducer from './bookshelfReducer'
import cartReducer from './cartReducer'

const reducer = combineReducers({
  home: homeReducer,
  book: bookDataReducers,
  bookshelf: bookshelfReducer,
  login: loginReducer,
  cart: cartReducer,
})

export default reducer
