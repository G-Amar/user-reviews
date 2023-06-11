import Card from "./shared/Card"
import { useContext, useState, useEffect } from "react"

import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

const ReviewForm = () => {
  const {addReview, reviewEdit, updateReview, updateEdit} = useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)


  useEffect(() => {
    if(reviewEdit.edit){
      setText(reviewEdit.item.text)
      setRating(reviewEdit.item.rating)
    }
  }, [reviewEdit])

  const updateText = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value) //text always changed
  }

  const handleSubmit = (e) => {
    e.preventDefault() //prevent the page refresh
    if(text.trim().length > 10) {
      const newReview = {
        text: text,
        rating: rating
      }

      if(reviewEdit.edit){
        updateReview(reviewEdit.item.id, newReview)
        updateEdit(false)
      } else {
        addReview(newReview)
      }
      
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate this webpage?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={updateText} type="text" placeholder="Write a review" value={text} />
          <Button type='submit' isDisabled={btnDisabled} version='secondary'>{reviewEdit.edit ? 'Edit' : 'Submit'}</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default ReviewForm