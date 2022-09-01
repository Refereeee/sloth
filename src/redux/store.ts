import { configureStore } from '@reduxjs/toolkit'
import register from "../redux/slice/registerSlice";

export const store = configureStore({
    reducer: {
        register,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch