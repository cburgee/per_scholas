import ContactItem from "../ContactItem"
import { useContext } from "react"
import { ContactsContext } from "../../context/contactsContext"
function ContactsList() {
  const contactsCtx = useContext(ContactsContext)
  const { contacts } = contactsCtx
  console.log(contacts)
  return (
    <div>
      <h2>Contact List</h2>
      <>
        {contacts ? (
          contacts.map((contacts) => (
            <ContactItem key={contacts.id} {...contacts} />
          ))
        ) : (
          <h3>No contacts found!</h3>
        )}
      </>
    </div>
  )
}

export default ContactsList
