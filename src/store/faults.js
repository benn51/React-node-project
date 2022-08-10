
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
  initialState:{isauthenticated:false,username:''},
  //initialState:{isnewuser:false,isauthenticated:false,isauthorized:false,userNameOrEmail:'',password:'',user:''},
  reducers:{
    authenticateUser(state,action){
    return {...state,isauthenticated:action.payload}
    },
    logOutuser(state,action){
       return {...state,isauthenticated:false}
    },
    displayLogedinUser(state,action){
return {...state,user:action.payload}
    }
    }
})
export const action= slice.actions
export const authAction= authSlice.actions
 const store= configureStore({
    reducer:{fault:slice.reducer,authentication:authSlice.reducer}
})
export default store

/*authorizeuser(state,action){
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
    },
    getUser(state,action){
return {...state,user:action.payload}
    }

*/ 