import ContactItem from "../ContactItem"
// import { useState, useEffect } from "react"
function ContactsList(props) {
  const { contacts } = props
  return (
    <div>
      <h2>Contact List</h2>
      <>
        {contacts ? (
          contacts.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))
        ) : (
          <h3>No contacts found!</h3>
        )}
      </>
    </div>
  )
}

export default ContactsList
