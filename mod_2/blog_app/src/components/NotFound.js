import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div>
      <h1>Page not Found</h1>
      <Link to="/">Go back home</Link>
    </div>
  )
}
