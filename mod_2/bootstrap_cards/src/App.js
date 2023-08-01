import cardsArr from "./data"
import React from "react"
import "./styles.css"
//import card1
import Card1 from "./components/Card"
import Card2 from "./components/Card2"

const cards = cardsArr.map((ele, index) => {
  return <Card1 {...ele} key={index} />
})

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  )
}
