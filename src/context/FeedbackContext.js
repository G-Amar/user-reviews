import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import defaultReviews from '../data/ReviewData';

// use this context so that we dont have to pass down props every time
// allows us to access the modifying functions from anywhere in our application
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [reviews, setReviews] = useState(defaultReviews)
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchReview()
  }, [])

  //fetch reviews
  const fetchReview = async () => {
    const response = await fetch("/review?_sort=id&_order=desc")
    const data = await response.json()

    setReviews(data)
    setIsLoading(false)
  }

  //set the item to be updated
  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    })
  }

  const updateEdit = (value) => {
    setReviewEdit({...reviewEdit, edit: value})
  }

  const updateReview = (id, item) => {
    setReviews(reviews.map((each) => each.id === id ? {...each, ...item} : each ))
  }
  
  const deleteReview = async (id) => {
    //remove from server
    await fetch(`/review/${id}`, { method: 'DELETE' })

    //update UI
    const newReviews = reviews.filter((review) => review.id !== id);
    setReviews(newReviews);
  }

  const addReview = async (newReview) => {
    const response = await fetch('/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })

    const data = await response.json()

    setReviews([data, ...reviews])
  }

  // our state and functions to modify state are placed in the value property
  return (
    <FeedbackContext.Provider value={{
      reviews,
      reviewEdit,
      isLoading,
      deleteReview,
      addReview,
      editReview,
      updateReview,
      updateEdit,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
