import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, item) => {
        console.log(item)
      state.items.push(item)
    },
    removeItem: (state) => {
      
    },
    
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer