import React,{useState} from 'react'
import './one.css'
import {useParams} from 'react-router'
import { useSelector } from 'react-redux'
const One = () => {
  const currentUser= useSelector(state=>state.authentication.username)
  const {id } = useParams()
    const [value, setValue]= useState('')
    const all = useSelector(state=>state.fault.map((aa)=>{return aa}))
    const newall= all.filter((aa)=>(
               aa._id===id
           ))

    return (
    <div className='one'>
      <div className='alldetails'>
              <div className='detailnavbar'> 
                       <div className='performedby'> Fault created by: <span style={{marginRight:'5vw'}}></span> </div>
                       <div className='datecreated'> falut created on {newall[0].timeFaultcreated}</div>
              </div>
              <div className='detailbody'>
                   <div className='shortfault'><article style={{marginLeft:'2vw',marginTop:'2vh'}} >discription of fault: {newall[0].fault}</article> </div>
                   <div className= 'onesolution' >
                        <div className='solwithpartn'>
                               <p  style={{marginLeft:'2vw',marginTop:'2vh'}}> Solution for fault: {newall[0].solution}  </p>
                               <div className='removeditems'>  
                                     <article> Replaced Part name: {newall[0].partname} </article> 
                                     <article>Replaced partnumber:{newall[0].parnumber} </article> 
                              </div>
                        </div>
                   </div>

                       

                       <div className='partmovement'> </div>
              </div>
             
             


      </div>
    </div>
  )
}

export default One