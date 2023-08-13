import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import StocksPage from "./pages/StocksPage"
import StockPage from "./pages/StockPage"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/stocks/:symbol" element={<StockPage />} />
      </Routes>
    </div>
  )
}

export default App
