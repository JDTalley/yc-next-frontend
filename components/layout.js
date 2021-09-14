import React from "react"
import { render } from "react-dom"
import Campgrounds from "./campgrounds"

const Layout = ({ campgrounds }) => {
    return (
        <div className="container">
            <Campgrounds campgrounds={campgrounds[0].campgrounds} />
        </div>
    )
}

export default Layout