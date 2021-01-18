import React from "react"
import Card from "./card"

const Campgrounds = ({ campgrounds }) => {
    return (
        <div className="campgrounds">
            {campgrounds.map((campground) => {
                return (
                    <div className="card">
                        <Card 
                            key={campground._id}
                            campground={campground} 
                            />
                    </div>
                )
            })}
        </div>
    )
}

export default Campgrounds