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
  const toggleDiscription=()=>{
    setShow(!show)
    setFaultarray(faults)
   console.log(faultarray)
  }
  const backFunction =()=>{
    navigate('/signedin')
  }
  return (
    <div className='container'>
      <div>
        <button onClick={backFunction}   className='upperbutton'> back</button>
      </div>
<form>
<div className='formcontainer'>
 <label htmlFor="tailnumber" className='formlabel'> Tail Number</label>   
<input className='forminput'   type="text" name='tailnumber' placeholder='enter tail number only' onChange={aFunc} value={enteredtailNumber}/>
<div>
  <button className='formbutton' onClick={submitHandler} > Serach </button>
</div>
</div>
</form>
<div  onClick={toggleDiscription} className='taildiv'> hi  </div>
{
  faults.map((fault)=>{
         return (
      <div>
       <div className={show? `showDiscription`:'noshowdescription'} >{fault.fault}</div>
       
    </div>
         )
  }  
   
  )

}  
    </div>
  )

}

export default SinglePlane
///<div  onClick={toggleDiscription} className='taildiv'> <p > {faults[0].ac} </p>   </div>