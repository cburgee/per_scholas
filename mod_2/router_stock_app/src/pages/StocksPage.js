import stocks from "../data"
import { Link } from "react-router-dom"

export default function StocksPage() {
  return (
    <div>
      <h1>StocksPage</h1>
      {stocks.map(function (stock) {
        const { name, symbol } = stock
        return (
          <Link to={`/stocks/${symbol}`}>
            <h3>{name}</h3>
          </Link>
        )
      })}
    </div>
  )
}
