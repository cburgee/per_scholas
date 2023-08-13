import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>Crypto Prices</div>
      </Link>

      <Link to="/currencies">
        <div>Currencies</div>
      </Link>
    </div>
  )
}
