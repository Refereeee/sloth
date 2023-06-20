import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartState{
  cartFlag:boolean
}

const initialState:CartState = {
  cartFlag: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartToggleFlag: (state) => {
      state.cartFlag = !state.cartFlag;
    },
  },
});

export const {
  cartToggleFlag,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
