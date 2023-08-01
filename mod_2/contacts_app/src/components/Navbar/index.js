import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
