import { createSlice } from "@reduxjs/toolkit"


export const wishlistslice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishlistItem : (state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem : (state, action)=>{
            return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {addWishlistItem,removeWishlistItem}=wishlistslice.actions
export default wishlistslice.reducer