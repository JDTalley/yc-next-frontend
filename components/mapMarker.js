import React from "react"

const MapMarker = ({ lat, long, name, key, index }) => {
    console.log(name + ' marker')
    return (
        <div className="map-marker" id={key} key={key}>
            <p>{index + 1}</p>
        </div>
    )
}

export default MapMarker