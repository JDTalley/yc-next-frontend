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
                        <img src={campground.image} />
                    </div>
                </a>
            </Link>
            <div>
                <Link as={`/campground/${campground._id}`} href="`/campground/[id]`">
                    <a>
                        <h1>{campground.name}</h1>
                    </a>
                </Link>
                <p>{campgroundExcerpt}</p>
            </div>
        </div>
    )
}

export default Card