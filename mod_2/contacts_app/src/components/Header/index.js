import styles from "./Header.module.css"
function Header(props) {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Header
