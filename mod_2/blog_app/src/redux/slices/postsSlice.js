import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"

export const postsSlice = createSlice({
  name: "posts",
  initialState: [
    { id: "1", title: "First Post!", content: "Hello!" },
    { id: "2", title: "Second Post", content: "More text" },
  ],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        console.log("FROM REDUCER ", state)
        const { payload } = action
        state.push(payload)
      },
      prepare(title, content) {
        //
        return {
          payload: {
            title,
            content,
            id: nanoid(),
            created_at: new Date().toISOString(),
          },
        }
      },
    },
    editPost: (state, action) => {
      const { payload } = action
      const indexOfPost = state.findIndex((post) => post.id === payload.id)
      //    state[indexOfPost] = payload;
      state.splice(indexOfPost, 1, payload)
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const { payload } = action
      return (state = state.concat(payload))
    })
  },
})

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return data
})

// actions
export const { addPost, editPost } = postsSlice.actions

// reducer
export default postsSlice.reducer
