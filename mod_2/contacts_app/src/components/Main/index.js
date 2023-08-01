import styles from "./Main.module.css"
import ContactForm from "../ContactForm"
import ContactsList from "../ContactsList"
import { useState, useEffect } from "react"

function Main() {
  const [contacts, setContacts] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setContacts(data)
    }
    fetchData()
  }, [])

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  return (
    <main className={styles.container}>
      <section className={styles.section1}>
        <ContactsList contacts={contacts} />
      </section>
      <section className={styles.section2}>
        <h2>
          <ContactForm contacts={contacts} addNewContact={addNewContact} />
        </h2>
      </section>
    </main>
  )
}

export default Main
