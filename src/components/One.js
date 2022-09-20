import React,{useState} from 'react'
import './one.css'
import {useParams,useNavigate} from 'react-router'
import { useSelector } from 'react-redux'
const One = () => {
  const navigate= useNavigate()
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
                   <div className='shortfault'><article className='shortfaultarticle' style={{marginLeft:'2vw',marginTop:'2vh'}} >DISCRIPTION: {newall[0].fault}</article> </div>
                   <div className= 'onesolution' >
                        <div className='solwithpartn'>
                               <p className='solutionp' style={{marginLeft:'2vw',marginTop:'2vh'}}> SOLUTION: {newall[0].solution}  </p>
                               <div className='removeditems'>  
                                     <article> Replaced Part name: {newall[0].partname} </article> 
                                     <article>Replaced partnumber:{newall[0].parnumber} </article> 
                              </div>
                        </div>
                   </div>

                       

                       
              </div>
             
             <button className='backbutton' onClick={()=>{navigate(-1)}}>  Back</button>


      </div>
    </div>
  )
}

export default One