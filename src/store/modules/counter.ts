import { combineReducers, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    changeNumber: (state, action) => {
      state.value += action.payload
    }
  }
})
export const { changeNumber } = counterSlice.actions

export default counterSlice.reducer
