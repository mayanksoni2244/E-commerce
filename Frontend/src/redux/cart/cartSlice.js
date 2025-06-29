import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existing=state.find((item)=>item.id===action.payload.id)
            if(existing){
                existing.quantity+=1
            }else{
                state.push({...action.payload,quantity:1})
            }
        },
        increaseQty:(state,action)=>{
            const item=state.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity+=1
            }
        },
        decreaseQty:(state,action)=>{
            const index=state.findIndex((item)=>item.id===action.payload.id)
            if(index!==-1){
                if(state[index].quantity>1){
                    state[index].quantity-=1
                }else{
                    state.splice(index,1)
                }
            }
        },
        removeCart:()=>{
            return []
        }
    }
})
export const {addToCart,increaseQty,decreaseQty,removeCart}=cartSlice.actions
export default cartSlice.reducer;