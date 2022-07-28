
import { createSlice,configureStore } from "@reduxjs/toolkit";

const obj=[]
const slice= createSlice({
    name:'acFault',
    initialState:obj,
    reducers:{
        
  getAll(state,action){
  return action.payload
  },
  newFault(state,action){
return [...state,action.payload]
  },
  deletSingleFault(state,action){
   return state.filter((aa)=>(aa._id!==action.payload))
 }
        
    }
})
export const action= slice.actions
 const store= configureStore({
    reducer:slice.reducer
})
export default store