import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext"

const ReviewItem = ( {review} ) => {

  const {deleteReview, editReview} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{review.rating}</div>
      <button onClick={() => deleteReview(review.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit" onClick={() => editReview(review)}> {/*have to use arrow syntax or stack overflow*/}
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{review.text}</div>
    </Card>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewItem