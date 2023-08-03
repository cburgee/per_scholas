import styles from "./Header.module.css"
function Header(props) {
  return <h2 className={styles.header}>{props.headerText}</h2>
}

export default Header
