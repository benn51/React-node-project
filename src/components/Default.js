import React  from 'react'

import Home from './Home'
import Add from './Add'
import AllFaults from './AllFaults'
import {getAllFaults} from '../api/index.js'
import {useDispatch , useSelector} from 'react-redux'
import {useNavigate} from 'react-router'
import './default.css';
import { useState,useEffect } from 'react'
import {authAction} from '../store/faults'
const Default = () => {
  const currentUser= useSelector(state=>state.authentication.username)
  const dispatch= useDispatch()
   const navigate= useNavigate()
    const [swap,setSwap]= useState(true)
    const [retal,setRetal]= useState(false)
   
     const adFunc=()=>{
       setSwap(true)
       setRetal(false)
      
     }
       const alFunc=()=>{
      setRetal(true)
      dispatch(getAllFaults())
     }
     const logOutFunction= ()=>{
       localStorage.clear();
       dispatch(authAction.logOutuser())
       navigate('/home')
     }
    const showSinglePlaneFault=()=>{
      setSwap(false)
      setRetal(false)
      navigate('/singleplane')
    }
      return (
        <div className="default" >
         
      <div className='defaultcontainer'>
        <div className='hdr'>
         <li className='side' onClick={adFunc}>Addd Fault</li>
         <li li className='side' onClick={showSinglePlaneFault}>Search By Tail Number</li>
         <li li className='side' onClick={alFunc}> Show All Faults </li> 
         <li li className='side' >About</li>
         <li li className='side' onClick={ logOutFunction}>Sign out</li>
        </div>

      <div className='allcomponents'> 
     {!retal&&swap&&<Add/>}
    {retal&&<AllFaults/>}
    {!retal&& !swap&&<Home/>}
  
    </div>
         </div>
         
   </div>
      )
    }

export default Default