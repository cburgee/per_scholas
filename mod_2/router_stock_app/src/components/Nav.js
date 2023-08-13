import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <br />
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  )
}
