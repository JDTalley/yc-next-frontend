import React from "react"
import Link from "next/link"

const Card = ({ campground }) => {
    return (
        <Link as={`/campground/${campground._id}`} href="`/campground/[id]`">
            <a>
                <div>
                    <h1>{campground.name}</h1>
                    <img src={campground.image} />
                </div>
            </a>
        </Link>
    )
}

export default Card