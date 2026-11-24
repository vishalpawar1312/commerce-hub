import { createSlice } from "@reduxjs/toolkit";


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
const initialState: CartItem[] = [
  {
    id: "P-001",
    name: "Laptop",
    price: 60000,
    quantity: 1,
  },
  {
    id: "P-002",
    name: "Headphones",
    price: 2000,
    quantity: 2,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const index = state.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        state[index].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const index = state.findIndex((item) => item.id === itemId)
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity--
      }
    },
    removeFromCart: (state, action) => {
      const {itemId} = action.payload;
      return state.filter((item)=> item.id !== itemId)
    }

  }
})

export default cartSlice.reducer;
export const { increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;