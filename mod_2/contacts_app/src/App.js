import { useState, useEffect, useReducer } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { ContactsContext } from "./context/contactsContext"
import contactsReducer from "./reducer/contactsReducer"

function App() {
  //* State ====
  // const [contacts, setContacts] = useState(null)
  const [contacts, dispatch] = useReducer(contactsReducer, null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      dispatch({ type: "fetched_data", payload: data })
    }
    fetchData()
  }, [])

  // const addNewContact = (newContact) => {
  //   setContacts([...contacts, newContact])
  // }

  return (
    <ContactsContext.Provider value={{ contacts, dispatch }}>
      <div>
        <Navbar />
        <Header title="Contacts App" />
        <Main />
      </div>
    </ContactsContext.Provider>
  )
}

export default App
