import React from "react"

const MapMarker = ({ lat, long, name, key }) => {
    return (
        <div className="map-marker" id={key} key={key}>
        </div>
    )
}

export default MapMarker