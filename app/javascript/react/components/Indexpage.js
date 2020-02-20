import React, { useState, useEffect } from 'react'
import InfoContainer from './InfoContainer'
import InfoTile from './InfoTile'
import MapContainer from './MapContainer'
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
      <div key={toilet.id} className="row index-div">
        <InfoContainer
          key={toilet.id}
          id={toilet.id}
          restroomData={toilet}
        />
      </div>
    )
  });
  return(
    <div>
      <div className="map-display">
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArHw2cFpooL6LryK0VR1A83O0v5hSeBIk&v=3.exp&libraries=geometry,drawing,places"
          isMarkerShown
          loadingElement={<div style={{ height: `100px` }} />}
          containerElement={<div style={{ height: `100px` }} />}
          mapElement={<div style={{ height: `550px`, width: `50%%`, float: `center` }} />}
        />
      </div>

      <div className="parallax">
        <div className="grid-container">
          <div>{restroomSquares}</div>
        </div>
      </div>
    </div>
  )
};

export default Indexpage
