export function getStrapiURL(path = '') {
  return `${
    // process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    'https://nextjs-strapiapi.herokuapp.com'
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  console.log(
    'here is the data from the fetchAPI leveraging getStrapiURL: ',
    data
  )
  return data
  console.log(`here is from the fetchAPI!!!!! ${data}`)
}
