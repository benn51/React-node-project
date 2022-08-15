import React from 'react'
import './add.css'
import {useState} from 'react'
import {action} from '../store/faults'
import {useDispatch} from 'react-redux'
import axios from 'axios'
 const Add = () => {
   const [ac,setAc]= useState('')
   const [fault,setFault]= useState('')
   const [station,setStation]= useState('')
   const dispatch= useDispatch()
   const[vart,setVart]= useState({ac:'',station:'',fault:''})
   //setting states from the inputs
   const aFunc=(e)=>{
     setAc(e.target.value)
   }
   const fFunc=(e)=>{
setFault(e.target.value)
   }
   const sFunc=(e)=>{
setStation(e.target.value)
   }
 
  //function triggerd by the submit button
   const uFunc = (e)=>{
     e.preventDefault()
     finFunc()
     setAc('')
     setFault('')
     setStation('')
   }
   const addFunc =  ()=>{
    const url= "https://bini-ac-fault-recorder.herokuapp.com/home/new"
    const newItem={ac:ac,fault:fault,station:station}
    setVart(newItem)
      return async (dispatch)=>{
    await  axios.post(url,newItem)
      dispatch(action.newFault(newItem))
   
    //console.log(data)
   }
      }
    const finFunc=()=>{
      dispatch(addFunc())
      }
   
  return (
    <div>
     <div className='loweradd'>
       <form > 
     <div className='ac'>

<input placeholder='aircraft tail number' onChange={aFunc} className='acinp' type="text" name="aircraft" value={ac}/>
</div>

<div className='station'>
 
  <input placeholder='fault station' onChange={sFunc} className='stinp' type="text" name='station' value={station}/>
</div>
<div className='fault'>

  <textarea placeholder='fault decription' onChange={fFunc} className='flinp' type="text" name="fault" value={fault}></textarea>
</div>
<button onClick={uFunc} className='abtn'>Add Fault</button>
</form>
 </div>
 <div className={vart.ac?'showDisc':'noshow'}> 
        <p className='showentered'>  The Aircraft: {vart.ac} Has encountered {vart.fault} at {vart.station} </p>
      </div>
    </div>
  )
 }
export default Add
