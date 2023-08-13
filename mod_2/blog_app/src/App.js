import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import "./App.css"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
import EditPostPage from "./pages/EditPostPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/edit/:id" element={<EditPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
