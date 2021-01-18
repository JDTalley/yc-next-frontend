import React from "react"
import { render } from "react-dom"
import Campgrounds from "./campgrounds"

const Layout = ({ campgrounds }) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome to YelpCamp!</h1>
                <p>View our hand-picked campgrounds</p>
            </div>
            <Campgrounds campgrounds={campgrounds[0].campgrounds} />
        </div>
    )
}

export default Layout