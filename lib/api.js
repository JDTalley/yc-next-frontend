export function getYcURL(path = "") {
    return `${
        process.env.NEXT_PUBLIC_YC_API_URL || "https://yelpcamp.jdtalley.com/api"
    }${path}`
}

// Helper to make GET requests to YC
export async function fetchAPI(path) {
    const requestURL = getYcURL(path)
    const response = await fetch(requestURL)
    const data = await response.json()
    return data
}