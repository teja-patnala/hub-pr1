import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import Header from '../Header'
import TopRatedBooks from '../TopRatedBooks'

class Cart extends Component {
  componentDidMount = async () => {
    const url = `https://apis.ccbp.in/book-hub/books?shelf=&search=`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const allData = data.books.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      readStatus: eachItem.read_status,
      rating: eachItem.rating,
      authorName: eachItem.author_name,
      coverPic: eachItem.cover_pic,
      favStatus: false,
    }))
    const {dispatch} = this.props
    dispatch({
      type: 'CART',
      payload: {cartBooksData: allData},
    })
  }

  changeFavStatus = async id => {
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
  }

  render() {
    const {bookshelf, cart} = this.props
    const {cartBooksData} = cart
    const {favBooksId} = bookshelf
    const favBookList = cartBooksData
      .filter(eachItem => favBooksId.includes(eachItem.id))
      .map(eachItem1 => ({
        ...eachItem1,
        favStatus: !eachItem1.favStatus,
      }))

    console.log(favBookList)
    return (
      <div className="book-cart-container">
        <Header />
        <div className="sub-book-cart-container">
          <h1 className="cart-heading">Favourite Books</h1>
          <div className="cart-container">
            <ul className="ul11">
              {favBookList.map(eachItem => (
                <div className="fav-item">
                  <TopRatedBooks eachItem={eachItem} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(store => store)(Cart)
