import React from "react"
import Card from "./card"

const Campgrounds = ({ campgrounds }) => {
    return (
        <div>
            {campgrounds.map((campground, index) => {
                return (
                    <div className="campgrounds" key={campground._id}>
                        <Card 
                            campground={campground} 
                            index={index}
                            />
                    </div>
                )
            })}
        </div>
    )
}

export default Campgrounds