import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: function (state) {
      state.value += 1
    },
    decrement: function (state) {
      state.value -= 1
    },
    increasebyAmount: function (state, action) {
      let { payload } = action
      payload = Number(payload)
      state.value += payload
    },
  },
})

export const { increment, decrement, increasebyAmount } = counterSlice.actions
export default counterSlice.reducer
