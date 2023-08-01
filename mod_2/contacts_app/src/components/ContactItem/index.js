function ContactItem(props) {
  console.log(props)
  const { name, email, phone } = props
  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h5>{phone}</h5>
    </div>
  )
}

export default ContactItem
