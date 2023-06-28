import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ObjCartTypes from '../../types/cartTypes';

interface CartState{
  cartFlag:boolean,
  items?: ObjCartTypes[],
}

const initialState:CartState = {
  cartFlag: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartFlagToFalse: (state) => {
      state.cartFlag = false;
    },
    cartFlagToOpen: (state) => {
      state.cartFlag = true;
    },
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
  },
});

export const {
  cartFlagToFalse,
  cartFlagToOpen,
  // addItem,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
