import { createSlice } from "@reduxjs/toolkit";

const cartProducts = createSlice({
    initialState:[],
    name:'cartProducts',
    reducers:{
        addToCart:(state,action)=>{
            let isHere = false 
            state.map((e) => {
                if(e.product.id === action.payload.product.id){
                    return isHere = true;
                }
            })
            if(isHere === false){
                state.push(action.payload)
            }else{
                const arr = state.map((e)=>{
                    if(e.product.id === action.payload.product.id){
                        return {product: action.payload.product, count : e.count+1,"condition":"new"}
                    }else{
                        return e
                    }
                })
                state = arr
                return state;
            }
        },AddUsed:(state,action)=>{
            let isHere = false;
            state.map((e)=>{
                if(e.product.id === action.payload.product.id){
                    return isHere = true
                }
            })
            if(!isHere){
                return state = [...state,action.payload]
            }else{
                return state.filter((e)=> e.product.id !== action.payload.product.id)
            }
        },
        removeFromCart:(state,action)=>{
            return state.filter((e)=> e.product.id !== action.payload.product.id && e)
        },
        increaseCount:(state,action)=>{
            return state.map((e)=>{
                if(e.product.id === action.payload.product.id){
                    return {product: action.payload.product, count : e.count+1 ,"condition":"new"}
                }else{
                    return e
                }
            })
        },
        decreaseCount:(state,action)=>{
            return state.map((e)=>{
                if(e.product.id === action.payload.product.id){
                    if(action.payload.count > 1){
                    return {product: action.payload.product, count : e.count-1,"condition":"new"}
                    }else{
                    return {product: action.payload.product, count : e.count,"condition":"new"}  
                    }
                }else{
                    return e
                }
            })
        },
        clearCart:(state)=>{
            return state = [];
        }
    }
})

export const {addToCart ,removeFromCart ,increaseCount,decreaseCount,AddUsed} = cartProducts.actions;
export default cartProducts.reducer;