import React from "react"
import Card from "./card"

const Campgrounds = ({ campgrounds }) => {
    return (
        <div className="campgrounds">
            {campgrounds.map((campground) => {
                return (
                    <Card 
                        campground={campground} 
                        />
                )
            })}
        </div>
    )
}

export default Campgrounds