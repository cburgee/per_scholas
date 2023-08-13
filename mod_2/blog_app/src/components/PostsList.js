import { useSelector, useDispatch } from "react-redux"
import PostItem from "./PostItem"

import { useEffect } from "react"
import { fetchPosts } from "../redux/slices/postsSlice"

export default function PostsList() {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  console.log(posts)
  return (
    <div>
      <h1>Posts List</h1>

      <section>
        {posts.length ? (
          posts.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </section>
    </div>
  )
}
