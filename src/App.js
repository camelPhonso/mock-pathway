import { useEffect, useState } from "react"

import Dropdown from "./components/Dropdown"
import "./App.css"
import fetchRoutes from "./utils/fetchRoutes.js"

function App() {
  const [routes, setRoutes] = useState(null)
  const [searchParam, setSearchParam] = useState(null)

  useEffect(() => {
    const getEmploymentRoutes = async () => {
      const fetchedRoutes = await fetchRoutes()
      setRoutes(fetchedRoutes)
    }

    getEmploymentRoutes()
  }, [setRoutes])

  const changeHandler = selectedOption => {
    setSearchParam(selectedOption)
  }

  return (
    <div className="App">
      <h1>I'm Running!!!</h1>

      <Dropdown
        options={routes ?? []}
        keyName={"name"}
        onChange={changeHandler}
        isDisabled={!routes}
      />

      <select disabled={searchParam === null}>
        <option>fh</option>
      </select>
    </div>
  )
}

export default App
