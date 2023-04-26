/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import getLocalStorageItems from './functions/getLocalStorageItems';
// import isValidLog from './functions/isValidLog';

interface CounterState {
  login: string,
  password: string,
  repeatPassword: string,
  loginFlag: boolean,
  passwordFlag: boolean,
  repeatPasswordFlag: boolean,
  buttonValue: boolean,
  items: any,
  registerFlag: boolean,
  noticeFlag:boolean,
  isAuth:boolean,
  headerImageFlagReg: boolean
}

const getLocalItems = getLocalStorageItems();

const initialState: CounterState = {
  login: '',
  password: '',
  repeatPassword: '',
  loginFlag: false,
  passwordFlag: false,
  repeatPasswordFlag: false,
  buttonValue: true,
  items: getLocalItems,
  registerFlag: false,
  noticeFlag: false,
  isAuth: false,
  headerImageFlagReg: false,
};

export const registerSlice = createSlice({
  name: 'register',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLoginValue: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    changePasswordValue: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changeRepeatPasswordValue: (state, action: PayloadAction<string>) => {
      state.repeatPassword = action.payload;
    },
    changeLoginFlagValue: (state, action: PayloadAction<boolean>) => {
      state.loginFlag = action.payload;
    },
    changePasswordFlagValue: (state, action: PayloadAction<boolean>) => {
      state.passwordFlag = action.payload;
    },
    changeRepeatPasswordFlagValue: (state, action: PayloadAction<boolean>) => {
      state.repeatPasswordFlag = action.payload;
    },
    changeButtonValue: (state, action: PayloadAction<boolean>) => {
      state.buttonValue = action.payload;
    },
    // setLocalStorageItem: (state, action: PayloadAction<any>) => {
    //   if (isValidLog(state.items, action.payload)) {
    //     state.items.push(action.payload);
    //     localStorage.setItem('items', JSON.stringify(state.items));
    //     state.registerFlag = true;
    //   } else {
    //     state.noticeFlag = true;
    //   }
    // },
    registerFlagToOff: (state) => {
      state.registerFlag = false;
    },
    noticeFlagToOff: (state) => {
      state.noticeFlag = false;
    },

  },
});

export const {
  changeLoginValue,
  changeRepeatPasswordValue,
  changePasswordValue,
  changeLoginFlagValue,
  changePasswordFlagValue,
  changeRepeatPasswordFlagValue,
  changeButtonValue,
  // setLocalStorageItem,
  registerFlagToOff,
  noticeFlagToOff,
} = registerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectReg = (state: RootState) => state.register;

export default registerSlice.reducer;
