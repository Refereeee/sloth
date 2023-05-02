/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import getLocalStorageItems from './functions/getLocalStorageItems';
import getCurrentUserFind, { getLoginImage } from './functions/currentUser';

// export const fetchUserByImage = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async () => {
//     const { data } = await axios.get('https://randomuser.me/api');
//     console.log(data);
//     return data.results[0].picture.thumbnail;
//   },
// );

interface CounterState {
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
    changeButtonValue: (state, action: PayloadAction<boolean>) => {
      state.buttonValue = action.payload;
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
  changeButtonValue,
  changeImageFlagTrue,
  setLoginSuccessToFalse,
  changeBurgerOpenFlag,
  setLoginFailToggle,
  refreshItems,
} = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLog = (state: RootState) => state.login;

export default loginSlice.reducer;
