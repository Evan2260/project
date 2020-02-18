import React, { useState } from 'react'
import _ from 'lodash'
import ErrorsList from './ErrorsList'

const ReviewsForm = (props) => {
debugger
  const[reviewRecord, setReviewRecord] = useState({
    rating: "",
    review: ""
  });

  const handleChange = (event) => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  const validForSubmission = () => {
    let submitErrors = {}
      if(reviewRecord["rating"].trim() === ""){
        submitErrors = {
          ...submitErrors,
          ["rating"]: "is blank"
        }
      }
      setErrors(submitErrors)
      return _.Empty(submitErrors)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = reviewRecord
    if(validForSubmission()){
      props.onSubmit(formPayload)
      setReviewRecord({
        rating: "",
        review: ""
      })
    }
  };

  return(
    <div>
      <form>

        <ErrorsList errors={errors} />

        <label>Review
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={reviewRecord.review}
          />
        </label>

        <input
          type="hidden"
          name="albumId"
          value={props.restroomId}
        />

        <input
          type="submit"
          className="button"
          value="Submit Review"
        />
      </form>
    </div>
  )
}

export default ReviewsForm
