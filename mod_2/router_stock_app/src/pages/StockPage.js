import stocks from "../data"
import { useParams } from "react-router-dom"

export default function StockPage() {
  const params = useParams()
  const { symbol } = params
  function findStock() {
    for (let i = 0; i < stocks.length; i++) {
      let curStock = null
      if (stocks[i].symbol === symbol) {
        curStock = stocks[i]
        return curStock
      }
    }
  }
  const curStock = findStock()
  return (
    <div>
      <h3>{curStock.name}</h3>
      <ul>
        <li>{curStock.symbol}</li>
        <li>{curStock.lastPrice}</li>
        <li>{curStock.change}</li>
        <li>{curStock.high}</li>
        <li>{curStock.low}</li>
        <li>{curStock.open}</li>
      </ul>
    </div>
  )
}
