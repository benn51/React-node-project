import React from 'react'
import './add.css'
import {useState} from 'react'
import {action} from '../store/faults'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {createFault} from '../api/index.js'
 const Add = () => {
   const [ac,setAc]= useState('')
   const [fault,setFault]= useState('')
   const [station,setStation]= useState('')
   const [solution,setSolution]= useState('')
   const [showpart,setShowpart]= useState(false)
   const [partname,setPartname]=useState('')
   const [partnumber,setPartnumber]= useState('')
   const dispatch= useDispatch()
   const[vart,setVart]= useState({ac:'',station:'',fault:'',solution:'',partname:'',partnumber:''})
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
 const solutionFunc=(e)=>{
  setSolution(e.target.value)
  console.log(e.target.value)
 }
 const partnameFunc=(e)=>{
setPartname(e.target.value)
console.log(e.target.value)
 }
 const partnumberFunc=(e)=>{
  setPartnumber(e.target.value)
  console.log(e.target.value)
   }
   

  //function triggerd by the submit button
   const uFunc = (e)=>{
     e.preventDefault()
     //finFunc()
     addFunc()
     setAc('')
     setFault('')
     setStation('')
     setSolution('')
     setPartname('')
     setPartnumber('')
   }
   const addFunc = async  ()=>{
    const time= new Date()
    const date= time.getDate()
    const month = time.getMonth()
    const year=time.getFullYear()
    const fullTime= `${month}/${date}/${year}`
   const newItem={ac:ac,fault:fault,station:station,solution:solution,partname:partname,partnumber:partnumber,timeFaultcreated:fullTime}
    const returnedFault= await createFault(newItem)
    setVart(returnedFault)
    dispatch(action.newFault(returnedFault))
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
<textarea placeholder='fault decription' onChange={fFunc} className='flinp' type="text" name="fault" maxLength={230} value={fault}></textarea>
</div>
<div className='solutions'>
  <textarea name="remedies" id="" cols="30" rows="10" value={solution} onChange={solutionFunc} className='solution'></textarea>
</div>
<div className='checkbox' style={{marginTop:'1vh',marginBottom:'1vh'}} onChange={()=>{ setShowpart(!showpart) }}>
  <label htmlFor="part movement" style={{fontSize:'smaller'}}>Have you replaced part</label>
  <input type="checkbox" style={{marginLeft:'1vw'}} />
</div>
<div className={!showpart?'noshowpart':'replaceditems'}>
  <div>
  <input type="text" name="partname" className='replacedpartname' placeholder='enter part name' value={partname} onChange={partnameFunc}/>
  <input type="text" name="partnumber" className='replacedpartnumber' placeholder='enter part number' value={partnumber} onChange={partnumberFunc} />
</div>
</div>

<button onClick={uFunc} className='abtn' type='submit'>Add Fault</button>
</form>
 </div>
 <div className={vart.ac?'showDisc':'noshow'}> 
        <p className='showentered'>  The Aircraft: {vart.ac} Has encountered {vart.fault} at {vart.station} </p>
      </div>
    </div>
  )
 }
export default Add
