import React from "react"
import GoogleMap from 'google-map-react'
import MapMarker from './mapMarker'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const APIKey = process.env.NEXT_PUBLIC_GOOGLE_APIKEY || process.env.NEXT_PUBLIC_GOOGLE_DEVAPIKEY

const Map = ({ campgrounds }) => {
  const latCenter = campgrounds.reduce((a, b) => {
    return a + parseFloat(b.lat)
  }, 0) / campgrounds.length

  const longCenter = campgrounds.reduce((a, b) => {
    return a + parseFloat(b.long)
  }, 0) / campgrounds.length

  const mapDefaults = {
    center: {
      lat: latCenter,
      lng: longCenter
    },
    zoom: 11
  }

  return (
    <div className="map">
      <div style={{ height: '100%', width: '100%' }}>
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
    </div>
  )
}

export default Map