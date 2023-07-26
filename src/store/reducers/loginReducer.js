const loginState = {username: '', password: '', text: '', loginStatus: false}

export default function loginReducer(state = loginState, action) {
  const {payload, type} = action
  if (type === 'LOGIN') {
    return {...state, ...payload}
  }
  return state
}
