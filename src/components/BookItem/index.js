import './index.css'
import {Link} from 'react-router-dom'
import {BookItemList, BookPara} from './styledComponents'

const BookItem = props => {
  const {eachItem} = props
  const {id, title, readStatus, rating, authorName, coverPic} = eachItem

  return (
    <BookItemList key={id}>
      <Link to={`/books/${id}`}>
        <img src={coverPic} className="cover-image" alt={title} />
      </Link>
      <div className="book-card-details">
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
