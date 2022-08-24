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
           <div className='upperfault'> 
           <div className='faulttailnumber' > Tail Number:  <span style={{fontSize:'calc(1.3vw)'}} >N{aa.ac}</span>  </div> 
           <div className='faultstation'>Station: <span style={{fontSize:'calc(1.3vw)'}}  >{aa.station}</span> </div> 
            <div className='dateentered'>  Date entered: <span style={{fontSize:'calc(1.0vw)'}} > 08/13/22</span> </div> 
            </div>
            <div className='faultdiscription' > 
            <div className='innerfaultdiscription'><div>Fault Description- <span style={{fontSize:'calc(0.9vw)'}} >{aa.fault}</span></div> </div>
            <button className='showsolutionbtn' onClick={aFunc} > show solution</button>
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