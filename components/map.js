import React from "react"
import GoogleMap from 'google-map-react'
import MapMarker from './mapMarker'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const APIKey = process.env.NEXT_PUBLIC_GOOGLE_APIKEY || process.env.NEXT_PUBLIC_GOOGLE_DEVAPIKEY

const Map = ({ campgrounds }) => {
  const mapDefaults = {
    center: {
      lat: 37.255067,
      lng: -80.410403
    },
    zoom: 11
  }

  const markers = campgrounds.map((campground) => {
    return (
      `<MapMarker
          lat=${campground.lat}
          long=${campground.long}
          name=${campground.name}
          />`
    )
  })

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        bootstrapURLKeys={{ key: APIKey }}
        defaultCenter={mapDefaults.center}
        defaultZoom={mapDefaults.zoom}
        >
          {campgrounds.map((campground) => {
            return (
              <MapMarker
                lat={parseFloat(campground.lat)}
                lng={parseFloat(campground.long)}
                name={campground.name}
                key={campground._id}
                />
            )
          })}

        </GoogleMap>
    </div>
  )
}

export default Map