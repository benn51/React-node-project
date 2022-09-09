import React, { useState,useEffect } from 'react'
import './singleplane.css'
import { singleFault } from '../api/index.js'
import {useDispatch,useSelector} from 'react-redux'
import { action } from '../store/faults'
import {useNavigate,Link} from 'react-router-dom'
const SinglePlane = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [enteredtailNumber,setEnteredtailNumber]=useState('')
  const [tailnumber,setTailnumber]= useState('')
  const faults= useSelector(state=>state.fault.map((key)=> {return  key}))

 useEffect(()=>{
   dispatch(action.clearState())
   console.log('state cleared')
   setTailnumber('')
 },[])
  const aFunc=(e)=>{
    setEnteredtailNumber(e.currentTarget.value)
  }
    const submitHandler=async (e)=>{
    e.preventDefault()
    const faultObject={tailnumber:enteredtailNumber}
    const returnedFault= await singleFault(faultObject)
    dispatch(action.getfaultbyTailnumber(returnedFault))
    setTailnumber(enteredtailNumber)
    setEnteredtailNumber('')
   
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
                  <button type='submit' className='formbutton' onClick={submitHandler} > Serach </button>
              </form> 
            </div>
  
   <div className='detailcontent'>
     <div className='tailnumberdiv'> Entered Tail Number: {tailnumber}</div>
     {
       faults.map((item)=>{
       return(
         <div className='alldetaildiv'>
  <div className='faultdiscriptiondiv'>  <Link to={`/onedetail/${item._id}`}> <p className='shortfaultp'>{item.shortfault} </p>  </Link>   </div>
  </div>
          )
       })
     }
   </div>
     <div>
        <button onClick={backFunction}   className='upperbutton'> Back</button>
         </div>
    </div>
</div>

  )}

export default SinglePlane
