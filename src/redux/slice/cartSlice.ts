import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ObjCartTypes from '../../types/cartTypes';

interface CartState{
  cartFlag:boolean,
  items?: ObjCartTypes[],
  totalCount: number,
}

const initialState:CartState = {
  cartFlag: false,
  items: [],
  totalCount: 0,
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
    addItem: (state, action:any) => {
      state.items!.push(action.payload);
      state.totalCount += 1;
    },
  },
});

export const {
  cartFlagToFalse,
  cartFlagToOpen,
  addItem,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
