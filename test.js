const https = require("https")

const options = {
  hostname: "occupational-maps-api.instituteforapprenticeships.org",
  path: "/api/v1/Routes",
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": "ADC7D7B1D29F4DF3974FCA5656071938",
  },
}

const req = https.request(options, res => {
  let data = ""

  res.on("data", chunk => {
    data += chunk
  })

  res.on("end", () => {
    console.log(JSON.parse(data))
  })
})

req.on("error", e => {
  console.error(`Problem with request: ${e.message}`)
})

req.end()
