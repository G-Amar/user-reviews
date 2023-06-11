import ReviewItem from "./ReviewItem"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"
import { useContext } from "react"

import { motion, AnimatePresence } from "framer-motion"

const ReviewList = ( ) => {
  const {reviews, isLoading} = useContext(FeedbackContext)

  if(!isLoading && (!reviews || reviews.length === 0)){
    return <p>No Feedback Yet</p>
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <AnimatePresence>
        {reviews.map((review) => { //for each doesnt work, have to use map
          return (
            <motion.div
              key={review.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <ReviewItem key={review.id} review={review} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </>
  )
  
  // without framer motion
  // return (
  //   <>
  //     {reviews.map((review) => { //for each doesnt work, have to use map
  //       return <ReviewItem key={review.id} review={review} handleDelete={handleDelete}/>
  //     })}
  //   </>
  // )
}

export default ReviewList