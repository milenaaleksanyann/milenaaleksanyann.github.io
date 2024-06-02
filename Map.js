import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

export default function Map() {
    const defaultCenter={
        lat:40.2049242,
        lng: 44.5400546
    }
  return (
    <LoadScript googleMapsApiKey='AIzaSyCmAwYPuq3gDFTlfzbttMiBaGavrmUtF8g'>
        <GoogleMap
          mapContainerStyle={{width:"100%",height:"100%",minHeight:"330px"}}
          zoom={15}
          center={defaultCenter}
        >
            
        </GoogleMap>

    </LoadScript>
  )
} 
