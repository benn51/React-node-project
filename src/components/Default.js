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
  const currentUser= useSelector(state=>state.authentication.user)
  const dispatch= useDispatch()
   const navigate= useNavigate()
    const [swap,setSwap]= useState(true)
    const [retal,setRetal]= useState(false)
   
     const adFunc=()=>{
       setSwap(true)
       setRetal(false)
       console.log(swap)
     }
     const retFunc=()=>{
       setSwap(false)
       setRetal(false)
       
       console.log(swap)
     }
     const alFunc=()=>{
      setRetal(true)
      dispatch(getAllFaults())
     }
     const logOutFunction= ()=>{
       localStorage.clear();
       dispatch(authAction.logOutuser())
       navigate('/')
     }
    
      return (
        <div className="default" >
          <div className='userdetail'> {`well come  ${currentUser}`} </div>
          <div className='hdr'>
        <nav className='nav'> <li onClick={adFunc}>Addd Fault</li> <li onClick={retFunc}>Retrieve Info</li><li onClick={alFunc}> Show Entered </li>  <li>About</li><li onClick={ logOutFunction}>Sign out</li></nav>
          </div>

      <div className='allcomponents'> 
     
    {!retal&&swap&&<Add/>}
    {retal&&<AllFaults/>}
    {!retal&& !swap&&<Home/>}
  
    </div>
   </div>
      )
    }

export default Default