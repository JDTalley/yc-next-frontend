import React from "react"
import Campgrounds from "./campgrounds"
import Map from "./map"

const Layout = ({ campgrounds }) => {
    return (
        <div className="container">
            <Campgrounds campgrounds={campgrounds[0].campgrounds} />
            <Map campgrounds={campgrounds[0].campgrounds} />
        </div>
    )
}

export default Layout