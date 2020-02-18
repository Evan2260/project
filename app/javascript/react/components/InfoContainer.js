import React from 'react'
import InfoTile from './InfoTile'

const InfoContainer = ({ restroomData }) => {
  let { id, business_name, location, restroom_image, sanitation } = restroomData

  return(
    <div>
      <div className="info-display">
        <InfoTile
          id={id}
          key={id}
          name={business_name}
          address={location}
          image={restroom_image}
        />
      </div>
    </div>
  )
}

export default InfoContainer
