const bookshelfState = {
  allBooksData: [],
  filter: 'ALL',
  search: '',
  status: false,
  favBooksId: [],
  filterValue: 'ALL',
}

export default function bookshelfReducer(state = bookshelfState, action) {
  const {payload, type} = action
  if (type === 'BOOKSHELF') {
    return {...state, ...payload}
  }
  return state
}
