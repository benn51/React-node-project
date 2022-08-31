import axios from 'axios'
import {action,authAction} from '../store/faults'
import  {useDispatch}  from 'react-redux'
const API= axios.create({baseURL:"https://biniapp-3.herokuapp.com"})    //" http://localhost:5000/"
API.interceptors.request.use((req)=>{
const token= JSON.parse(localStorage.getItem('authToken')).token
req.headers.authorization = `Bearer ${token}`
return req;
})

//function to create new fault 
export const createFault = async (newfault)=>{
 const {data}= await  API.post('/home/new',newfault)
 return data
}


//function to get all faults from the database
export const getAllFaults= ()=>{ 
   //const url= "http://localhost:5000/home/in"
   //const url="https://bini-mata.herokuapp.com/home/new"
   //const url= "https://bini-ac-fault-recorder.herokuapp.com/home/in"
    return async (dispatch)=>{
       const {data} = await API.get(`home/in?page=1`)
        dispatch(action.getAll(data)) 
      
      }
  }
  //function to delete fault entries from the database
  export const delFunc= (id)=>{
   return async (dispatch)=>{
  await API.delete(`home/${id}`)
 dispatch(action.deletSingleFault(id)) 
}}

  export const sampleGet= async ()=>{
   const id= JSON.parse(localStorage.getItem('profileObject')).token
   const {data}= await API.get(`home/the/${id}`)
   console.log(data)
  }
 //function to get fault of a single tail number
export const singleFault = async (obj)=>{
    const {data} = await API.post('home/one',obj)
  return data
}
//function tocreate new user
  export const createNewuser= async (user)=>{
   
    const url="https://biniapp-3.herokuapp.com/home/newuser"    
   const {data} = await axios.post(url,user)
 }
 export const previousPagefunc=()=>{
  return async (dispatch)=>{
    const {data} = await API.get(`home/in?page=10`)
     dispatch(action.getAll(data)) 
   
   }
 
 }
 //function to return one item for displaying fault and solution
 export const faultsolutionFunc= (id)=>{
return async (dispatch)=>{
 await API.get(`home/${id}`)
dispatch(action.deletSingleFault(id)) 
}}



 /*export const nextPagefunc=()=>{
  return async (dispatch)=>{
  const {data} = await API.get(`home/in?page=10 type=dec`)
  dispatch(action.getAll(data)) 
   
   }

 }*/
 export const nextPagefunc = async ()=>{
  const {data} = await API.get(`home/in?page=4 type=dec`)
return data

}


