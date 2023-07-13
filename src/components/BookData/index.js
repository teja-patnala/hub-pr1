import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import Header from '../Header'
import LoadSpinner from '../LoaderSpinner'
import Footer from '../Footer'
import {BookPara1} from './styledComponents'

class BookData extends Component {
  componentDidMount = () => {
    this.getTheClearBookData()
  }

  displayBookDetails = () => {
    const {book} = this.props
    const {bookDetails} = book
    const {
      id,
      coverPic,
      aboutBook,
      aboutAuthor,
      title,
      authorName,
      rating,
      readStatus,
    } = bookDetails
    return (
      <div key={id} className="book-details">
        <div className="book-details1">
          <img alt="book-card" src={coverPic} className="book-card-pic" />
          <div style={{'margin-left': '20px'}}>
            <BookPara1
              color="white"
              fontsize="16px"
              fontweight="bold"
              fontfamily="serif"
            >
              {title}
            </BookPara1>
            <BookPara1
              color="white"
              fontsize="15px"
              fontweight="normal"
              fontfamily="serif"
            >
              {authorName}
            </BookPara1>
            <BookPara1
              color="white"
              fontsize="15px"
              fontweight="normal"
              fontfamily="serif"
            >
              Rating: {rating}
            </BookPara1>
            <BookPara1
              color="white"
              fontsize="15px"
              fontweight="normal"
              fontfamily="serif"
            >
              ReadStatus: <span style={{color: 'red'}}>{readStatus}</span>
            </BookPara1>
          </div>
        </div>
        <hr
          style={{
            background: 'lime',
            width: '90%',
            color: 'lime',
            borderColor: 'lime',
            height: '3px',
          }}
        />
        <BookPara1
          color="violet"
          fontsize="18px"
          fontsize1="16px"
          fontweight="bold"
          fontfamily="serif"
        >
          About author
        </BookPara1>
        <BookPara1
          color="white"
          fontsize="16px"
          fontsize1="14px"
          fontweight="500"
          fontfamily="serif"
        >
          {aboutAuthor}
        </BookPara1>
        <hr
          style={{
            background: 'lime',
            width: '90%',
            color: 'lime',
            borderColor: 'lime',
            height: '3px',
          }}
        />
        <BookPara1
          color="violet"
          fontsize="18px"
          fontsize1="16px"
          fontweight="bold"
          fontfamily="serif"
        >
          About book
        </BookPara1>
        <BookPara1
          color="white"
          fontsize="16px"
          fontsize1="14px"
          fontweight="500"
          fontfamily="serif"
        >
          {aboutBook}
        </BookPara1>
      </div>
    )
  }

  getTheClearBookData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/book-hub/books/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const bookClearData = {
      id: data.book_details.id,
      authorName: data.book_details.author_name,
      coverPic: data.book_details.cover_pic,
      aboutBook: data.book_details.about_book,
      rating: data.book_details.rating,
      readStatus: data.book_details.read_status,
      title: data.book_details.title,
      aboutAuthor: data.book_details.about_author,
    }
    const {dispatch} = this.props

    dispatch({
      type: 'BOOK',
      payload: {bookDetails: bookClearData, status: true},
    })
    console.log(this.props)
  }

  render() {
    const {book} = this.props
    const {status} = book

    return (
      <div className="book-data-container">
        <Header />
        {!status && (
          <div style={{'margin-top': '20%'}} className="spinner-container">
            <LoadSpinner />
          </div>
        )}
        {status && this.displayBookDetails()}
        <div
          className="footer1"
          style={{'margin-top': '20px', position: 'relative', bottom: '0px'}}
        >
          <Footer />
        </div>
      </div>
    )
  }
}
export default connect(store => store)(BookData)
