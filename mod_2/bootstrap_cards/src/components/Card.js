import React from "react"
import CardBody from "./CardBody"
import CardImage from "./CardImage"
//create the component
const Card1 = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  )
}

//export the component
export default Card1
