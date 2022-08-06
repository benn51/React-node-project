
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
const authSlice= createSlice({
  name:"authenticateState",
  initialState:{isnewuser:false,isauthenticated:true,isauthorized:false,userNameOrEmail:'',password:''},
  reducers:{
    authenticateuser(state,action){
    return {...state,isauthenticated:action.payload}
    },
    authorizeuser(state,action){
  return {...state,isauthorized:action.payload}
    },
    newuser(state,action){
 return {...state,isnewuser:true}
    },
    getUsernameOrEmail(state,action){
       return {...state,userNameOrEmail:action.payload}
    },
    getPassword(state,action){
return {...state,password:action.payload}
    }

  }
})
export const action= slice.actions
export const authAction= authSlice.actions
 const store= configureStore({
    reducer:{fault:slice.reducer,authentication:authSlice.reducer}
})
export default store