/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import getLocalStorageItems from './functions/getLocalStorageItems';
import getCurrentUserFind, { getLoginImage, validLogin } from './functions/currentUser';

// export const fetchUserByImage = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async () => {
//     const { data } = await axios.get('https://randomuser.me/api');
//     console.log(data);
//     return data.results[0].picture.thumbnail;
//   },
// );

interface CounterState {
    login: string,
    password: string,
    loginFlag: boolean,
    passwordFlag: boolean,
    buttonValue: boolean,
    items: any,
    currentUserFind: any,
    image: any,
    headerImageFlagLogin: boolean,
    loadingImgFlag: boolean,
    loginSuccess: boolean,
    loginFail: boolean,
    burgerOpen: boolean,
}

const getLocalItems = getLocalStorageItems();
const getLocalUser = getCurrentUserFind();
const getImageLocalStorage = getLoginImage();

const initialState: CounterState = {
  login: '',
  password: '',
  loginFlag: false,
  passwordFlag: false,
  buttonValue: true,
  items: getLocalItems,
  currentUserFind: getLocalUser,
  image: getImageLocalStorage,
  headerImageFlagLogin: false,
  loadingImgFlag: false,
  loginSuccess: false,
  loginFail: false,
  burgerOpen: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginValue: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    changePasswordValue: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changeLoginFlagValue: (state, action: PayloadAction<boolean>) => {
      state.loginFlag = action.payload;
    },
    changePasswordFlagValue: (state, action: PayloadAction<boolean>) => {
      state.passwordFlag = action.payload;
    },
    changeButtonValue: (state, action: PayloadAction<boolean>) => {
      state.buttonValue = action.payload;
    },
    setLocalStorageItem: (state, action: PayloadAction<any>) => {
      if (validLogin(state.items, action.payload)) {
        state.loginSuccess = true;
        state.currentUserFind = action.payload.split(' ').slice(0, 1);
        localStorage.setItem('currentUser', state.currentUserFind);
        state.headerImageFlagLogin = true;
        state.login = '';
        state.password = '';
      } else {
        state.loginFail = true;
      }
    },
    changeImageFlagTrue: (state) => {
      state.headerImageFlagLogin = true;
    },
    changeImageFlagFalse: (state) => {
      state.headerImageFlagLogin = false;
      localStorage.removeItem('loginImage');
      localStorage.removeItem('currentUser');
      state.image = '';
    },
    setLoginSuccessToFalse: (state) => {
      state.loginSuccess = false;
    },
    clearInputFields: (state) => {
      state.login = '';
      state.password = '';
    },
    setLoginFailToggle: (state) => {
      state.loginFail = !state.loginFail;
    },
    changeBurgerOpenFlag: (state, action) => {
      state.burgerOpen = action.payload;
    },
    refreshItems: (state) => {
      state.items = getLocalStorageItems();
    },
  },
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(fetchUserByImage.pending, (state) => {
  //     state.loadingImgFlag = true;
  //   });
  //   builder.addCase(fetchUserByImage.fulfilled, (state, action) => {
  //     state.loadingImgFlag = false;
  //     if (!state.image) {
  //       state.image = action.payload;
  //     }
  //     localStorage.setItem('loginImage', state.image);
  //   });
  // },
});

export const {
  changeLoginValue,
  changePasswordValue,
  changeLoginFlagValue,
  changePasswordFlagValue,
  changeButtonValue,
  setLocalStorageItem,
  changeImageFlagTrue,
  changeImageFlagFalse,
  setLoginSuccessToFalse,
  clearInputFields,
  changeBurgerOpenFlag,
  setLoginFailToggle,
  refreshItems,
} = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLog = (state: RootState) => state.login;

export default loginSlice.reducer;
