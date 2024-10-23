import { configureStore } from "@reduxjs/toolkit";
import  wishlistslice  from "./wishlistslice";
import  cartSlice  from "./cartSlice";





const store = configureStore({
    reducer:{
            Wishlist : wishlistslice,
           cartItem  : cartSlice
        
    }
})

export default store