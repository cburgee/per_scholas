import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
export default function PostPage() {
  const { id } = useParams()
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  )
  console.log(post)
  console.log(id)
  return (
    <div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h6></h6>
      </div>
      <Link to={`/posts/edit/${id}`}>Edit Post</Link>
    </div>
  )
}
