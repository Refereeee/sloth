import { configureStore } from '@reduxjs/toolkit';
import register from './slice/registerSlice';
import login from './slice/loginSLice';
// eslint-disable-next-line import/no-cycle
import home from './slice/homeSlice';
import playoff from './slice/playoffSlice';

export const store = configureStore({
  reducer: {
    register,
    login,
    home,
    playoff,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
