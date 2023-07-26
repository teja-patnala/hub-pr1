import './index.css'
import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {HomeMainContainer, HomeMainHeading, HomePara} from './styledComponents'
import Header from '../Header'
import LoadSpinner from '../LoaderSpinner'
import TopRatedBooks from '../TopRatedBooks'
import Footer from '../Footer'

class Home extends Component {
  componentDidMount = () => {
    this.getTheBooksData()
  }

  goToBookshelves = () => {
    const {history} = this.props
    history.push('/bookshelves')
  }

  getTheBooksData = async () => {
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const allBooks = data.books.map(item => ({
      id: item.id,
      authorName: item.author_name,
      coverPic: item.cover_pic,
      title: item.title,
    }))
    const {dispatch} = this.props

    dispatch({
      type: 'HOME',
      payload: {topRatedBooks: allBooks, dataStatus: true},
    })
  }

  render() {
    const {home} = this.props
    const {topRatedBooks, dataStatus} = home
    const settings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    const settings1 = {
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    }
    return (
      <HomeMainContainer>
        <Header />
        <div className="home-container">
          <HomeMainHeading
            fontsize="40px"
            fontweight="bold"
            fontfamily="Roboto"
          >
            Find Your Next Favorite Books?
          </HomeMainHeading>
          <HomePara
            color="white"
            fontsize="18px"
            fontweight="400"
            fontfamily="serif"
          >
            Your are in the right place. Tell us what title or generes you have
            enjoyed in the past, and we will give you suprisingly insightful
            recommendations
          </HomePara>
          <div className="home-sub-container">
            <HomePara
              color="white"
              fontsize="20px"
              fontweight="700"
              fontfamily="Roboto"
            >
              Top Rated
            </HomePara>
            <button
              onClick={this.goToBookshelves}
              className="bookshelves-button "
              type="button"
            >
              Find Books
            </button>
          </div>
          <div className="data-container">
            {!dataStatus && (
              <div className="spinner-container">
                <LoadSpinner />
              </div>
            )}
            {dataStatus && (
              <div>
                <div className="slider-container">
                  <Slider {...settings}>
                    {topRatedBooks.map(eachItem => (
                      <TopRatedBooks eachItem={eachItem} />
                    ))}
                  </Slider>
                </div>
                <div className="slider-container1">
                  <Slider {...settings1}>
                    {topRatedBooks.map(eachItem => (
                      <TopRatedBooks eachItem={eachItem} />
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
          <div className="footer" style={{position: 'absolute', bottom: '0px'}}>
            <Footer />
          </div>
        </div>
      </HomeMainContainer>
    )
  }
}
export default connect(store => store)(Home)
