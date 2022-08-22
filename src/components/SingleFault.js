import React,{useState} from 'react'
import Delete from './Delete.js'
import './singlefault.css'
import {useSelector} from 'react-redux'

const SingleFault = () => {
 const all= useSelector(state=>state.fault.map((aa)=>{return aa}))
const [mysolution,Setmysolution]= useState(true)
const[solvalue,setSolvalue] = useState('')
const toggleSolution=(e)=>{
  const newall=all.filter((now)=>(
now._id=== e._id
  ))
 console.log(newall[0].solution)
 setSolvalue(newall[0].solution)
console.log(solvalue)
 
}
const aFunc=(event)=>{
console.log(event.target)
event.target.classList.toggle('dontshow')
}
 
 return (
    <div className='allfault'>
    
          {
         all.map((aa)=>{
         return  <div className='all'>
           <div className='faultdiv'> 
           <span className='tailnumber'>Tail Number:{aa.ac}  Station: {aa.station} </span> 
            <span className='tailnumber'>  Date entered: dat3</span>
             <p className='fault' >Fault Description {aa.fault}</p> 
             <button onClick={aFunc} > show solution</button>
             <div onClick={aFunc}  className= {mysolution ?'solutionclass':'dontshow'} >
               <div className='partsused' onClick={aFunc}>
                <li>solution {solvalue}</li>
                <li className= {`${aa._id}`}>{aa.partname}</li>  
                <div>{aa.partnumber}</div>  

                </div>
             </div>
            
          </div>
              <div className='deletecomponent'> <Delete id={aa._id}/>  </div>   
              </div>
               
                })
              }
    </div>
  )
}

export default SingleFault