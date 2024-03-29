import { fetchAPI } from "../../lib/api"
import Nav from "../../components/nav"

const CampgroundPage = (campground) => {
    campground = campground.campground.campground
    return (
        <div>
            <Nav />
            <div className="container-full">
                <h1>{campground.name}</h1>
                <div className="campground-img-full">
                    <img src={campground.image} alt={campground.name + " Image"} />
                </div>
                <p>{campground.description}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const campgrounds = await fetchAPI("/campgrounds")
    const cg = campgrounds.campgrounds

    return {
        paths: cg.map((campground) => ({
            params: {
                slug: campground._id,
            }
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const campground = await fetchAPI(
        `/campgrounds/${params.slug}`
    )

    return {
        props: { campground },
        revalidate: 1,
    }
}

export default CampgroundPage