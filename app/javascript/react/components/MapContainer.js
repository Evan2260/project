import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'

  const MapContainer = withScriptjs(withGoogleMap((props) => {
    
      return(
      <>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat:42.3601, lng:-71.0589 }}
        >
        {props.isMarkerShown && <Marker position={{ lat:42.3601, lng:-71.0589 }} />}
        </GoogleMap>
      </>
    )
  }));

export default MapContainer
