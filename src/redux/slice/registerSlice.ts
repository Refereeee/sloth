import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'


interface CounterState {
    login: string,
    password: string,
    repeatPassword: string
}

const initialState: CounterState = {
    login: '',
    password: '',
    repeatPassword: ''
}

export const registerSlice = createSlice({
    name: 'register',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeLoginValue: (state, action:any ) => {
            state.login = action.payload
        },
        changePasswordValue: (state, action:any ) => {
            state.password = action.payload
        },
        changeRepeatPasswordValue: (state, action:any ) => {
            state.repeatPassword = action.payload
        }
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const {changeLoginValue,changeRepeatPasswordValue,changePasswordValue} = registerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectReg = (state: RootState) => state.register

export default registerSlice.reducer