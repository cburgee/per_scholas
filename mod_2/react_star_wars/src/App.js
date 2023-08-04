import "./App.css"
import StarShipList from "./components/StarShipList.js"
import { useEffect, useState } from "react"
import GetAllStarships from "./services/sw-api.js"

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllStarships()
      setStarships(data.results)
    }
    fetchData()
  }, [])

  return (
    <div>
      <StarShipList arr={starships} />
    </div>
  )
}

export default App
