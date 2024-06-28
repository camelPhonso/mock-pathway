export default async function fetchOccupations(searchTerm, pageNumber) {
  const url = 
  `https://occupational-maps-api.instituteforapprenticeships.org/api/v1/SearchOccupations?searchTerm=${searchTerm}&pageNumber=${pageNumber}`

  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": "ADC7D7B1D29F4DF3974FCA5656071938",
      accept: "application/json",
    },
  }

  try {
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Error fetching Occupations: ${error}`)
    throw error
  }
}
