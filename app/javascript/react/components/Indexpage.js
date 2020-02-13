import React, { useState, useEffect } from 'react'
import InfoContainer from './InfoContainer'
import InfoTile from './InfoTile'
import { Link } from "react-router-dom"

const Indexpage = (props) => {
  const [restrooms, setRestrooms] = useState([])

  useEffect(() => {
    fetch('/api/v1/restrooms.json')
      .then(response => {
        if(response.ok) {
          return response
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(response => response.json())
      .then(body => {
        setRestrooms(body)
      })
      .catch(error => {
        console.log(`Error fetching restrooms: ${error.message}`)
      })
  }, []);

  const restroomSquares = restrooms.map((toilet) => {

    return(
      <div className="row index-div">
        <InfoContainer
          key={toilet.id}
          id={toilet.id}
          restroomData={toilet}
        />
      </div>
    )
  });
  return(
    <div className="parallax">
      <h4>Index</h4>
        <div className="grid-container">
          <div>{restroomSquares}</div>
        </div>
    </div>
  )
};

export default Indexpage
