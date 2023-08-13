import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Price() {
  const [coin, setCoin] = useState(null)
  const params = useParams()
  const { symbol } = params
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_CRYPTO_API_KEY}`

  const getCoin = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCoin(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(function () {
    setCoin(getCoin())
  }, [])

  function loaded() {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }

  const loading = () => <h1>Loading...</h1>

  return coin && coin.rate ? loaded() : loading()
}
