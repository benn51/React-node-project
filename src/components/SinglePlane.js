import React, { useState,useEffect } from 'react'
import './singleplane.css'
import { singleFault } from '../api/index.js'
import {useDispatch,useSelector} from 'react-redux'
import { action } from '../store/faults'
import {useNavigate} from 'react-router-dom'
const SinglePlane = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [enteredtailNumber,setEnteredtailNumber]=useState('')
  const [faultarray,setFaultarray] = useState([])
  const [show,setShow] =useState(true)
  const faults= useSelector(state=>state.fault.map((key)=> {return  key}))

 
  const aFunc=(e)=>{
    setEnteredtailNumber(e.currentTarget.value)
  }
    const submitHandler=async (e)=>{
    e.preventDefault()
    const faultObject={tailnumber:enteredtailNumber}
    const returnedFault= await singleFault(faultObject)
    dispatch(action.getfaultbyTailnumber(returnedFault))
    setEnteredtailNumber('')
    setShow(false) // to change fault discription display off initially 
  }

  const backFunction =()=>{
    navigate(-1)
  }
  return (
  <div className='Singleplane'>
       <div className='uppercontainer'>
             <div className='formcontainer'>
              <form>
                 <label htmlFor="tailnumber" className='formlabel'> Tail Number:  </label>   
                 <input className='finput' type="text" name='tailnumber' placeholder='enter tail number only' onChange={aFunc} value={enteredtailNumber}/>
                  <button className='formbutton' onClick={submitHandler} > Serach </button>
              </form> 
            </div>
  
   <div className='detailcontent'>
     content
   </div>
        

         <div>
        <button onClick={backFunction}   className='upperbutton'> back</button>
         </div>
    </div>
</div>

  )}

export default SinglePlane
