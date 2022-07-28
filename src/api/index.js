import axios from 'axios'
import {action} from '../store/faults'
const API= axios.create({baseURL: "http://localhost:5000"})
API.interceptors.request.use((req)=>{
const token= JSON.parse(localStorage.getItem('profileObject')).token
req.headers.authorization = `Bearer ${token}`
return req;
})

export const getAllFaults= ()=>{ 
   //const url= "http://localhost:5000/home/in"
   //const url="https://bini-mata.herokuapp.com/home/new"
   //const url= "https://bini-ac-fault-recorder.herokuapp.com/home/in"
    return async (dispatch)=>{
const id= JSON.parse(localStorage.getItem('profileObject')).token
        const {data} = await API.get(`home/in/${id}`)
        dispatch(action.getAll(data)) 
        console.log(data)}
  }
  export const delFunc= (id)=>{
   // const url= "https://bini-ac-fault-recorder.herokuapp.com/home"
    const url= "http://localhost:5000/home"
    return async (dispatch)=>{
  await axios.delete(`${url}/${id}`)
 dispatch(action.deletSingleFault(id)) 
}}

  export const sampleGet= async ()=>{
   const id= JSON.parse(localStorage.getItem('profileObject')).token

   const {data}= await API.get(`home/the/${id}`)
   console.log(data)
  }




