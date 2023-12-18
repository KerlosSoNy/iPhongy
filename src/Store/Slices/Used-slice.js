import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('usedproductsSlice/fetchproducts', async ()=>{
    const res = await fetch('http://localhost:3200/usedProducts')
    const data = await res.json()
    return data
})

const usedproductsSlice = createSlice({
    initialState:[],
    name:"usedproductsSlice",
    reducers:{
        addProduct:(state,action)=>{
            return state.push(action.payload)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled ,(state,action)=>{
            return state = action.payload
        } )
    }
})

// export const {addProduct} = usedproductsSlice.actions;
export default usedproductsSlice.reducer;