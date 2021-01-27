import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  maxWidth: '1200px',
  height: '100%',
  position: 'relative'
};

export const MapContainer = (props) => {
    return(
        <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1LbQZ5KCA4pSgBgz-SEak8RxUz_AM8XU'
})(MapContainer);