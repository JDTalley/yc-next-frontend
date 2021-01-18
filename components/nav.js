import React from "react"
import Link from "next/link"

const Nav = () => {
    return (
        <div>
            <nav>
                <Link href="/">
                    <a>YelpCamp</a>
                </Link>
            </nav>
        </div>
    )
}

export default Nav