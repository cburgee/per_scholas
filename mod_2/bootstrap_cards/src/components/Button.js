import React from "react"

const Button = ({ url }) => {
  return (
    <a href={url} className="btn btn-primary">
      Go somewhere
    </a>
  )
}

export default Button
