import styles from "./HomePage.module.css"
import Header from "./Header"
import SearchBar from "./SearchBar"
function HomePage() {
  return (
    <section className={styles.content}>
      HomePage
      <Header />
      <SearchBar />
    </section>
  )
}

export default HomePage
