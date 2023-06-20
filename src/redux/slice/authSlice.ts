import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import { RootState } from '../store';
import { IUser } from '../../models/IUser';

interface Params{
    email:string,
    password:string
}

let useroid = {} as IUser;
export const createUser = createAsyncThunk('/register', async (params:Params) => {
  const { email, password } = params;
  const { data } = await AuthService.registration(email, password);
  localStorage.setItem('token', data.accessToken);
  console.log(data);
  useroid = data.user;
});

export const loginUser = createAsyncThunk('/login', async (params:Params) => {
  const { email, password } = params;
  const { data } = await AuthService.login(email, password);
  localStorage.setItem('token', data.accessToken);
  useroid = data.user;
});

export const refresh = createAsyncThunk('/refresh', async () => {
  const { data } = await AuthService.checkAuth();
  localStorage.setItem('token', data.accessToken);
  useroid = data.user;
});

export const logout = createAsyncThunk('/logout', async () => {
  await AuthService.logout();
  localStorage.removeItem('token');
});

interface GlobalAuth {
    isAuth:boolean,
    imageFlag:boolean
    user: IUser
}
const initialState:GlobalAuth = {
  isAuth: false,
  imageFlag: false,
  user: {} as IUser,
};

// eslint-disable-next-line import/prefer-default-export
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state) => {
      state.isAuth = true;
      state.imageFlag = true;
      state.user = useroid;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isAuth = true;
      state.imageFlag = true;
      state.user = useroid;
    });
    builder.addCase(refresh.fulfilled, (state) => {
      state.isAuth = true;
      state.imageFlag = true;
      state.user = useroid;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.imageFlag = false;
      state.user = {} as IUser;
    });
  },
});

export const authOptions = (state: RootState) => state.auth;

export default authSlice.reducer;
