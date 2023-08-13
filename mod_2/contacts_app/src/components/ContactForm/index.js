import { useState, useContext } from "react"
import { ContactsContext } from "../../context/contactsContext"
function ContactForm() {
  const contactsCtx = useContext(ContactsContext)
  const { dispatch } = contactsCtx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = { ...formData, id: new Date() }
    dispatch({ type: "add_contact", payload: newContact })
    setFormData({
      name: "",
      email: "",
      phone: "",
    })
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h2>Create new Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          {/* <input type="text" ref={nameRef} /> */}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {/* <input type="text" ref={emailRef} /> */}
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
          {/* <input type="text" ref={phoneRef} /> */}
        </div>

        <button>Create</button>
      </form>
    </div>
  )
}

export default ContactForm
