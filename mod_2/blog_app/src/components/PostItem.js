import { Link } from "react-router-dom"
export default function PostItem(props) {
  const { title, content, id } = props.post
  return (
    <article>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </Link>
    </article>
  )
}
