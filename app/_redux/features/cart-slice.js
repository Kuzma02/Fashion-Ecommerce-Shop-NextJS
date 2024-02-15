import { calculateTotals } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.product.id === action.payload.product.id;
      });
      if (!cartItem) {
        state.cartItems.push(action.payload);
      } else {
        cartItem.product.amount += Number(action.payload.product.amount);
      }

      const { amount, total } = calculateTotals(state.cartItems);
      state.amount = amount;
      state.total = total;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.product.id !== payload.id;
      });
      const { amount, total } = calculateTotals(state.cartItems);
      state.amount = amount;
      state.total = total;
    },
    updateQuantity: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.product.id === action.payload.product.id;
      });
      cartItem.product.amount = Number(action.payload.product.quantity);
      const { amount, total } = calculateTotals(state.cartItems);
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  addToCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;