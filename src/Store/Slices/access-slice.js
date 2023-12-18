import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchAccessorize = createAsyncThunk('accessorizeSlice/fetchAccessorize', async ()=>{
    const res = await fetch('http://localhost:3200/accessorize')
    const data = await res.json();
    return data
})

const accessorizeSlice = createSlice({
    initialState:[],
    name:'accessorizeSlice',
    reducers:{
        addToAccess:(state,action)=>{
            return state.push(action.payload)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAccessorize.fulfilled ,(state,action)=>{
            return state = action.payload
        } )
    }
}) 

export const {addToAccess} = accessorizeSlice.actions;
export default accessorizeSlice.reducer;


