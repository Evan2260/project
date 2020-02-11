import React from 'react'
import MapContainer from './MapContainer'
import InfoContainer from './InfoContainer'


const Indexpage = (props) => {

  return(
    <div>
      <h1>This is the index page</h1>
        <div>
          <MapContainer />
          <InfoContainer />
        </div>
    </div>
  )
}

export default Indexpage