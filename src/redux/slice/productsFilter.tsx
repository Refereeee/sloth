import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import axios from "axios";
import {getFilters} from "./productsFunctions/getFilters";


export const fetchProductsByApi = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await axios.get("https://631ca0134fa7d3264cb2fee9.mockapi.io/data")
        const data = await response.data
        return data
    }
)

interface filterState {
    categories: string[],
    companies:object[],
    colors:string[],
    products:any,
    priceValue:number
}


const initialState: filterState = {
    categories: [],
    companies:[],
    colors:[],
    products:'',
    priceValue:0
}

export const productsFilter = createSlice({
    name: 'productsFilter',
    initialState,
    reducers: {
        setInputValue:(state,action:PayloadAction<string>)=>{
            state.priceValue = Number(action.payload)
        },
        // changeLoginValue: (state, action: PayloadAction<string>) => {
        //     state.login = action.payload
        // },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProductsByApi.pending, (state, action) => {

        })
        builder.addCase(fetchProductsByApi.fulfilled, (state, action) => {
            // state.loadingImgFlag = false;
            // if(!state.image) {
            //     state.image = action.payload
            // }
            // localStorage.setItem('loginImage', state.image)
            state.products = action.payload
            const filters = getFilters(action.payload)
            state.categories = filters.categories
            state.colors = filters.colors
            state.companies = filters.compMap
            console.log(state.products,state.colors,state.companies,state.categories)
        })
    },
})

export const {
    // changeLoginValue,
    setInputValue
} = productsFilter.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProductsFilter = (state: RootState) => state.productsFilter

export default productsFilter.reducer