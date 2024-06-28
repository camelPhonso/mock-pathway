import "dotenv/config"

export default async function getAllRoutes() {
  const url =
    "https://occupational-maps-api.instituteforapprenticeships.org/api/v1/Routes"

  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.MAP_KEY,
      accept: "application/json",
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Error fetching Routes: ${error}`)
    throw error
  }
}
