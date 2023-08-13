import styles from "./Main.module.css"
import ContactForm from "../ContactForm"
import ContactsList from "../ContactsList"

function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.section1}>
        <ContactsList />
      </section>
      <section className={styles.section2}>
        <h2>
          <ContactForm />
        </h2>
      </section>
    </main>
  )
}

export default Main
