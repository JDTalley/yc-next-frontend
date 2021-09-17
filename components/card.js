import React from "react"
import Link from "next/link"

const Card = ({ campground }) => {
    let campgroundExcerpt = ''

    if (campground.description.length > 50) {
        campgroundExcerpt = campground.description.slice(0,50) + '...'
    } else {
        campgroundExcerpt = campground.description
    }

    return (
        <div className="card" key={campground._id}>
            <Link as={`/campground/${campground._id}`} href="`/campground/[id]`">
                <a>
                    <div>
                        <img src={campground.image} alt={campground.name + " Image"} />
                    </div>
                </a>
            </Link>
            <div className="campground-info-card">
                <Link as={`/campground/${campground._id}`} href="`/campground/[id]`">
                    <a>
                        <h3>{campground.name}</h3>
                    </a>
                </Link>
                <p>{campgroundExcerpt}</p>
            </div>
        </div>
    )
}

export default Card