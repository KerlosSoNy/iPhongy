import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchNewProducts = createAsyncThunk('newSlice/fetchNewProducts', async ()=>{
    const res = await fetch('http://localhost:3200/newProducts');
    const data = await res.json()
    return data;
})

const newSlice = createSlice({
    initialState:[],
    name:"newSlice",
    reducers:{
        addToAccess:(state,action)=>{
            return state.push(action.payload)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNewProducts.fulfilled, (state,action)=>{
            return state= action.payload
        })
    }
})

export const {addToProducts} = newSlice.actions;
export default newSlice.reducer;