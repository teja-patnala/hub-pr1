const ChangeFavStatus = async id => {
  const {bookshelf, dispatch} = this.props
  const {favBooksId} = bookshelf
  const checkPresence = favBooksId.includes(id)
  const alteredFavList = [...favBooksId]
  if (checkPresence) {
    const indexOfId = alteredFavList.indexOf(id)
    alteredFavList.splice(indexOfId, 1)
  } else {
    alteredFavList.push(id)
  }
  await dispatch({
    type: 'BOOKSHELF',
    payload: {favBooksId: [...alteredFavList]},
  })
  return <></>
}
export default ChangeFavStatus
