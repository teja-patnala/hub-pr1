const homeState = {topRatedBooks: [], dataStatus: false}

export default function homeReducer(state = homeState, action) {
  const {payload, type} = action
  if (type === 'HOME') {
    return {...state, ...payload}
  }
  return state
}
