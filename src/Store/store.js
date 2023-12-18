import { configureStore } from "@reduxjs/toolkit";
import usedproductsSlice from './Slices/Used-slice';
import cartProducts from './Slices/Cart-slice'
import accessorizeSlice from './Slices/access-slice'
import NewSlice from "./Slices/New-slice";
export const mainStore = configureStore({
    reducer:{
        newMarket: NewSlice,
        usedMarket : usedproductsSlice,
        accessoreMarket : accessorizeSlice,
        cart : cartProducts,
    }
})