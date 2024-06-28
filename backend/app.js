import express from "express"
import cors from "cors"

import getAllRoutes from "./routes/getAllRoutes.js"

const server = express()

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))
server.use(express.json())

server.get("/getAllRoutes", async (req, res) => {
  try {
    const data = await getAllRoutes()
    res.status(200).json(data)
  } catch (error) {
    console.error(`Error getting route: ${error}`)
    res.status(500).json(error)
  }
})

server.listen(8080, () => console.log("Server Running!"))
