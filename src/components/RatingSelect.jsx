import { useContext, useState, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

const RatingSelect = ( {select} ) => {
  const {reviewEdit} = useContext(FeedbackContext)
  const [currentRating, setCurrentRating] = useState(10)

  useEffect(() => {
    if(reviewEdit.edit){
      setCurrentRating(reviewEdit.item.rating)
    }
  }, [reviewEdit])

  const setRating = (e) => {
    setCurrentRating(parseInt(e.target.value))
    select(parseInt(e.target.value))
  }

  return (
    <ul className="rating">
      <li>
        <input 
          type="radio"
          id='num1'
          name='rating'
          value='1'
          onChange={setRating}
          checked={currentRating === 1} 
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num2'
          name='rating'
          value='2'
          onChange={setRating}
          checked={currentRating === 2} 
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num3'
          name='rating'
          value='3'
          onChange={setRating}
          checked={currentRating === 3} 
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num4'
          name='rating'
          value='4'
          onChange={setRating}
          checked={currentRating === 4} 
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num5'
          name='rating'
          value='5'
          onChange={setRating}
          checked={currentRating === 5} 
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num6'
          name='rating'
          value='6'
          onChange={setRating}
          checked={currentRating === 6} 
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num7'
          name='rating'
          value='7'
          onChange={setRating}
          checked={currentRating === 7} 
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num8'
          name='rating'
          value='8'
          onChange={setRating}
          checked={currentRating === 8} 
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num9'
          name='rating'
          value='9'
          onChange={setRating}
          checked={currentRating === 9} 
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input 
          type="radio"
          id='num10'
          name='rating'
          value='10'
          onChange={setRating}
          checked={currentRating === 10} 
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  )
}

export default RatingSelect