import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const location = {
  lat: 38.867624646631285,
  lng: -9.354791824850398
  
};

function MapRestaurant() {
  return (

    <LoadScript 
      googleMapsApiKey="AIzaSyA-4kKS9fqKjk6jMvvo_mFgqiJlnZOeqTc"
    >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
      <Marker position={location}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapRestaurant;