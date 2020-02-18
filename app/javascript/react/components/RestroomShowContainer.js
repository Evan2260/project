import React, { useState, useEffect } from 'react'
import RestroomShow from './RestroomShow'
import ReviewsTile from './ReviewsTile'
import ReviewsForm from './ReviewsForm'

const RestroomShowContainer = (props) => {
  const [ restroom, setRestroom ] = useState([])
  const [ reviews, setReviews ] = useState([])

  let restroomId = props.match.params.id

  useEffect (() => {
    fetch(`/api/v1/restrooms/${restroomId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`)
        throw(error)
      }
    })
    .then(fetchedRestroom => {
    setRestroom(fetchedRestroom)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const submitNewReview = (event) => {
    fetch(`/api/v1/restrooms/${restroomId}/reviews`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setReviews([
        ...reviews,
        body.review
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  };

  const reviewsTiles = reviews.map((review) => {
    return(
      <div>
        <ReviewsTile
          key={review.id}
          reviewData={review}
        />
      </div>
    )
  });

  return (
    <div>
      <RestroomShow
        restroomObject={restroom}
      />
      {reviewsTiles}
      <ReviewsForm
        onSubmit={submitNewReview}
        restroomId={props.match.params.id}
      />
    </div>
  )

};

export default RestroomShowContainer
