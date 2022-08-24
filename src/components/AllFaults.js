import React, {useState} from 'react'
import './allFaults.css'
import SingleFault from './SingleFault'
import {getAllFaults} from '../api/index.js'
import {useDispatch} from 'react-redux'
import {action} from '../store/faults'
import axios from 'axios'

const API= axios.create({baseURL:"https://ben-fault-recorder-2.herokuapp.com/" })
API.interceptors.request.use((req)=>{
const token= JSON.parse(localStorage.getItem('authToken')).token
req.headers.authorization = `Bearer ${token}`
return req;
})
const AllFaults = () => {
let [direction,setDirection]= useState(1)
let [pagenumber,setPagenumber]= useState(1)
const dispatch= useDispatch()

const  nextPagefunc= ()=>{ 
        console.log('trigerred')
        setDirection(direction++)
       
            return async (dispatch)=>{
            const {data} = await API.get(`home/in?page=${direction}`)
             dispatch(action.getAll(data)) 
            }
            
       }

const  previousPagefunc= ()=>{ 
        console.log('trigerred')
        setDirection(direction--)
       
            return async (dispatch)=>{
            const {data} = await API.get(`home/in?page=${direction}`)
             dispatch(action.getAll(data)) 
            }
            }
 
return (
     <div className='retal'>
             <div className='movebtn'>
          <div><button onClick={()=>dispatch(previousPagefunc())} className='nxtprevbtn'>Previous Page</button></div>
          <div> <button onClick={()=> dispatch(nextPagefunc())} className='nxtprevbtn'>Next Page</button></div>
          
  </div>
  <div className='pagenumber'><span>{pagenumber}</span></div>
   <div> <SingleFault/>  </div>  
  
     </div>
        )
   
}

export default AllFaults