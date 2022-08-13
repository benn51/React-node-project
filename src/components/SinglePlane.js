import React, { useState,useEffect } from 'react'
import './single.css'
import { singleFault } from '../api/index.js'
import {useDispatch,useSelector} from 'react-redux'
import { action } from '../store/faults'
const SinglePlane = () => {
  const dispatch= useDispatch()
  const [enteredtailNumber,setEnteredtailNumber]=useState('')
  const [show,setShow] =useState(false)
  const faults= useSelector(state=>state.fault.map((key)=> {return  key}))
 useEffect(()=>{
    dispatch(action.clearState())
   
  },[])
  const aFunc=(e)=>{
    setEnteredtailNumber(e.currentTarget.value)
  }
    const submitHandler=async (e)=>{
    e.preventDefault()
    const faultObject={tailnumber:enteredtailNumber}
    const returnedFault= await singleFault(faultObject)
    dispatch(action.getfaultbyTailnumber(returnedFault))
    setEnteredtailNumber('')
    setShow(false) // to change fault display off initially 
  }
  const toggleDiscription=()=>{
    setShow(!show)
   
  }
  return (
    <div className='container'>
<form>
<div id='formcontainer'>
 <label htmlFor="tailnumber" className='formlabel'> Tail Number</label>   
<input className='forminput'   type="text" name='tailnumber' placeholder='enter tail number only' onChange={aFunc} value={enteredtailNumber}/>
<div>
  <button className='formbutton' onClick={submitHandler} > Serach </button>
</div>
</div>
</form>
{
  faults.map((fault)=>{
    return(
       <div  onClick={toggleDiscription} className='taildiv'> <p > {fault.ac} </p>  
       <div className={show? `showDiscription`:'noshowdescription'} >   {fault.fault}</div>
        </div> 
      )
    

      
  })
}
<div className='lowercontainer'>


</div>




    </div>
  )
}

export default SinglePlane