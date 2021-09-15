import React from "react"
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const APIKey = process.env.NEXT_PUBLIC_GOOGLE_APIKey || ''

export default function Map(){
  const defaultProps = {
    center: {
      lat: 37.255067,
      lng: -80.410403
    },
    zoom: 11
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={37.255067}
          lng={-80.410403}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}