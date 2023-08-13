import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../redux/slices/postsSlice"

export default function AddPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  // === dispatch hook
  const dispatch = useDispatch()

  // handle change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // handle submit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    // dispatch an action
    dispatch(addPost(formData.title, formData.content))

    // reset the form state
    setFormData({
      title: "",
      content: "",
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="content">Content: </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <button disabled={!(formData.title && formData.content)}>
          Add Post
        </button>
      </form>
    </div>
  )
}
