import StarShipCard from "./StarShipCard"
import StarShipCard from "./StarShipCard"
function StarShipList({ arr }) {
  return (
    <div>
      {arr.map((elem) => {
        ;<StarShipCard key={elem.name}>{elem.name}</StarShipCard>
        return <div></div>
      })}
    </div>
  )
}

export default StarShipList
