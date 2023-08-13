import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

// TODO:
// read data from state
// create a input to add new todo
// button to delete a todo

// 'dgPXxUz_6fWIQBD8XmiSy'

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", text: "Learn React", completed: true },
    { id: "2", text: "Learn Redux", completed: false },
  ],
  reducers: {
    addTodo: (state, payload) => {
      console.log(payload)
      console.log(state.todos)
      //   state.todos.push({
      //     id: `${nanoid()}`,
      //     text: payload,
      //     completed: false,
      //   })
    },

    // delete todo
  },
})

// Todo: we need to export our actions creators
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer
