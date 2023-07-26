import './index.css'
import {Link} from 'react-router-dom'
import {SliderPara} from './styledComponents'

const TopRatedBooks = props => {
  const {eachItem} = props
  const {id, authorName, coverPic, title} = eachItem
  return (
    <li key={id} className="slider-item">
      <Link to={`/books/${id}`}>
        <img alt={title} src={coverPic} className="slider-image" />
      </Link>
      <SliderPara
        color="white"
        fontsize="17px"
        fontweight="700"
        fontfamily="serif"
      >
        {authorName}
      </SliderPara>
      <SliderPara
        color="white"
        fontsize="12px"
        fontweight="400"
        fontfamily="serif"
      >
        {title}
      </SliderPara>
    </li>
  )
}
export default TopRatedBooks
