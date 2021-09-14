import React from "react"
import Card from "./card"

const Campgrounds = ({ campgrounds }) => {
    return (
        <div className="campgrounds">
            {campgrounds.map((campground) => {
                return (
                    <div className="card" key={campground._id}>
                        <Card 
                            campground={campground} 
                            />
                    </div>
                )
            })}
        </div>
    )
}

export default Campgrounds