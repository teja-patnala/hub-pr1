const bookState = {bookDetails: [], status: false}

export default function bookDataReducer(state = bookState, action) {
  const {type, payload} = action
  if (type === 'BOOK') {
    return {...state, ...payload}
  }
  return state
}
