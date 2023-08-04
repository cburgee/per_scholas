import StarShipCard from "./StarShipCard"

function StarShipList({ arr }) {
  return (
    <div>
      {arr.map((elem) => {
        return <div key={elem.name}>{elem.name}</div>
      })}
    </div>
  )
}

export default StarShipList
