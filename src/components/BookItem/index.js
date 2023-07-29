import './index.css'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {BookItemList, BookPara} from './styledComponents'

const BookItem = props => {
  const {eachItem, changeFavStatus} = props
  const {
    id,
    title,
    favStatus,
    readStatus,
    rating,
    authorName,
    coverPic,
  } = eachItem

  const iconColor = favStatus ? 'red' : 'white'

  const changeStatus = () => {
    changeFavStatus(id)
  }

  return (
    <BookItemList key={id}>
      <Link to={`/books/${id}`}>
        <img src={coverPic} className="cover-image" alt={title} />
      </Link>
      <div className="book-card-details">
        <button type="button" className="fav-button" onClick={changeStatus}>
          <AiFillStar className={`fav-icon ${iconColor}`} />
        </button>
        <BookPara
          color="white"
          fontsize="16px"
          fontweight="bold"
          fontfamily="serif"
        >
          {title}
        </BookPara>
        <BookPara
          color="white"
          fontsize="15px"
          fontweight="normal"
          fontfamily="serif"
        >
          {authorName}
        </BookPara>
        <BookPara
          color="white"
          fontsize="15px"
          fontweight="normal"
          fontfamily="serif"
        >
          Rating: {rating}
        </BookPara>
        <BookPara
          color="white"
          fontsize="15px"
          fontweight="normal"
          fontfamily="serif"
        >
          ReadStatus: <span style={{color: 'red'}}>{readStatus}</span>
        </BookPara>
      </div>
    </BookItemList>
  )
}
export default BookItem
