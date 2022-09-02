import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'


interface CounterState {
    login: string,
    password: string,
    repeatPassword: string,
    loginFlag: boolean,
    passwordFlag:boolean,
    repeatPasswordFlag:boolean,
    buttonValue:boolean
}

const initialState: CounterState = {
    login: '',
    password: '',
    repeatPassword: '',
    loginFlag: false,
    passwordFlag: false,
    repeatPasswordFlag:false,
    buttonValue:true,
}

export const registerSlice = createSlice({
    name: 'register',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeLoginValue: (state, action) => {
            state.login = action.payload
        },
        changePasswordValue: (state, action: any) => {
            state.password = action.payload
        },
        changeRepeatPasswordValue: (state, action: any) => {
            state.repeatPassword = action.payload
        },
        changeLoginFlagValue: (state,action:PayloadAction<boolean>) => {
            state.loginFlag = action.payload
        },
        changePasswordFlagValue: (state,action:PayloadAction<boolean>) => {
            state.passwordFlag = action.payload
        },
        changeRepeatPasswordFlagValue: (state,action:PayloadAction<boolean>)=>{
            state.repeatPasswordFlag = action.payload
        },
        changeButtonValue: (state,action:PayloadAction<boolean>)=>{
            state.buttonValue = action.payload
        }
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const {
    changeLoginValue,
    changeRepeatPasswordValue,
    changePasswordValue,
    changeLoginFlagValue,
    changePasswordFlagValue,
    changeRepeatPasswordFlagValue,
    changeButtonValue
} = registerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectReg = (state: RootState) => state.register

export default registerSlice.reducer