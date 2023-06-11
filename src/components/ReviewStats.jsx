import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const ReviewStats = ( ) => {
  const {reviews} = useContext(FeedbackContext)
  //calculate average
  let average = reviews.reduce((acc, curr) => curr.rating + acc, 0) / reviews.length
  average = average.toFixed(1).replace(/[.,]0$/, '') //replace trailing 0 after .

  return (
    <div className="review-stats">
      <h4>{reviews.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? '0' : average}</h4>
    </div>
  )
}

export default ReviewStats