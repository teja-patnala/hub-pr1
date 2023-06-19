import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
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

class Login extends Component {
  state = {
    allBooksData: [],
    filter: bookshelvesList1[0].value,
    search: '',
    status: false,
  }

  text = bookshelvesList1[0].value

  componentDidMount = () => {
    this.getTheFilterBookList()
  }

  addFilter = async (a, b) => {
    this.text = b
    await this.setState({filter: a})
    this.getTheFilterBookList()
  }

  addSearch = async event => {
    await this.setState({search: event.target.value})
    this.getTheFilterBookList()
  }

  getTheFilterBookList = async () => {
    const {filter, search} = this.state
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
    }))
    this.setState({allBooksData: allData, status: true})
  }

  render() {
    const {allBooksData, status} = this.state
    const getTheUl = () => {
      if (allBooksData.length !== 0) {
        return (
          <ul className="book-container">
            {allBooksData.map(eachItem => (
              <BookItem eachItem={eachItem} />
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
    console.log(allBooksData)
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
                    onClick={() => this.addFilter(item.value, item.label)}
                  >
                    {item.label}
                  </FilterButton>
                </List>
              ))}
            </UL>
          </div>
          <div className="sub-bookshelves-container1">
            <div className="sub1">
              <p className="bookshelves-para">{this.text} books</p>
              <div>
                <input
                  className="input1"
                  onClick={this.addSearch}
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
}
export default Login
