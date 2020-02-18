import React, { useState, useEffect } from 'react'
import RestroomShow from './RestroomShow'

const RestroomShowContainer = (props) => {
  const [ restroom, setRestroom ] = useState([])

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
  }, [])


  return (
    <div>
      <RestroomShow
        restroomObject={restroom}
      />
    </div>
  )

};

export default RestroomShowContainer
