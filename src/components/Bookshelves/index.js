import './index.css'
import Cookies from 'js-cookie'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {AiOutlineSearch} from 'react-icons/ai'
import {
  BookshelvesMainContainer,
  UL,
  List,
  FilterButton,
} from './styledComponents'
import Header from '../Header'
import Footer from '../Footer'
import BookItem from '../BookItem'
import LoadSpinner from '../LoaderSpinner'

const bookshelvesList1 = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

const Login = props => {
  const {bookshelf, dispatch} = props
  const {filter, filterValue, search} = bookshelf

  useEffect(() => {
    const makeApiCall = async () => {
      const url = `https://apis.ccbp.in/book-hub/books?shelf=${filter}&search=${search}`
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
      dispatch({
        type: 'BOOKSHELF',
        payload: {allBooksData: allData, status: true},
      })
    }
    makeApiCall()
  }, [filter, search, dispatch])

  const changeFavStatus = async id => {
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

  const addFilter = async (a, b) => {
    await dispatch({
      type: 'BOOKSHELF',
      payload: {filter: a, filterValue: b},
    })
  }

  const addSearch = async event => {
    await dispatch({
      type: 'BOOKSHELF',
      payload: {search: event.target.value},
    })
  }
  const {allBooksData, status, favBooksId} = bookshelf
  const allBookData1 = allBooksData.map(eachItem => {
    if (favBooksId.includes(eachItem.id)) {
      return {
        ...eachItem,
        favStatus: !eachItem.favStatus,
      }
    }
    return {
      ...eachItem,
      favStatus: false,
    }
  })

  const getTheUl = () => {
    if (allBooksData.length !== 0) {
      return (
        <ul className="book-container">
          {allBookData1.map(eachItem => (
            <BookItem changeFavStatus={changeFavStatus} eachItem={eachItem} />
          ))}
        </ul>
      )
    }
    return (
      <div style={{margin: '25%'}}>
        <p className="bookshelves-para">No books with searched name</p>
        <img
          src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1683516495/jl8xzfxejfepqk8aaowm.png"
          className="no-search"
          alt="No Data"
        />
      </div>
    )
  }
  return (
    <BookshelvesMainContainer>
      <Header />
      <div className="bookshelves-container">
        <div className="sub-bookshelves-container">
          <UL>
            {bookshelvesList1.map(item => (
              <List key={item.id}>
                <FilterButton
                  type="button"
                  onClick={() => addFilter(item.value, item.label)}
                >
                  {item.label}
                </FilterButton>
              </List>
            ))}
          </UL>
        </div>
        <div className="sub-bookshelves-container1">
          <div className="sub1">
            <p className="bookshelves-para">{filterValue} books</p>
            <div className="input-container">
              <AiOutlineSearch className="search-icon" />
              <input
                className="input1"
                onChange={addSearch}
                type="text"
                placeholder="search"
              />
            </div>
          </div>
          {status ? (
            getTheUl()
          ) : (
            <div style={{margin: '25%'}} className="spinner-container">
              <LoadSpinner />
            </div>
          )}
        </div>
      </div>
      <div className="footer1" style={{position: 'absolute', bottom: '0px'}}>
        <Footer />
      </div>
    </BookshelvesMainContainer>
  )
}

export default connect(store => store)(Login)
