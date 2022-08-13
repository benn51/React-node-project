import axios from 'axios'
import {action,authAction} from '../store/faults'
import  {useDispatch}  from 'react-redux'
const API= axios.create({baseURL: "http://localhost:5000"})
API.interceptors.request.use((req)=>{
const token= JSON.parse(localStorage.getItem('authToken')).token
req.headers.authorization = `Bearer ${token}`
return req;
})

export const getAllFaults= ()=>{ 
   //const url= "http://localhost:5000/home/in"
   //const url="https://bini-mata.herokuapp.com/home/new"
   //const url= "https://bini-ac-fault-recorder.herokuapp.com/home/in"
    return async (dispatch)=>{
//const id= JSON.parse(localStorage.getItem('authToken')).token
        const {data} = await API.get(`home/in`)
        dispatch(action.getAll(data)) 
        console.log(data)}
  }
  export const delFunc= (id)=>{
   // const url= "https://bini-ac-fault-recorder.herokuapp.com/home"
    const url= "http://localhost:5000/home"
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
  export const createNewuser= async (user)=>{
    const url="http://localhost:5000/home/newuser"
    //const url= "https://bini-ac-fault-recorder.herokuapp.com/home/newuser"
   const {data} = await axios.post(url,user)
 }
 



