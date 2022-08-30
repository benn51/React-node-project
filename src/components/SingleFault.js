import React,{useState,useRef} from 'react'
import Delete from './Delete.js'
import './singlefault.css'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
const SingleFault = () => {
  const navigate= useNavigate()
  const [sol,setSol]= useState('')
 const all= useSelector(state=>state.fault.map((aa)=>{return aa}))

const aFunc= (e)=>{
const newall=all.find((aa)=>(aa._id===e))
setSol(e)
}
const bFunc=  (e)=>{
const newdiv= document.createElement('div')
newdiv.classList.add('iam')
newdiv.innerHTML=`<p>${sol} </p>`
const yy=e.currentTarget
const children= e.currentTarget.children
const ndlist= yy.childNodes.item(1)
if(children.length){
console.log('they are here')
ndlist.remove()
}
else{
  yy.appendChild(newdiv)
  console.log('they are not here')
}

}
const cFunc=()=>{
setSol('')
}
const gFunc=()=>{
  navigate('/onedetail')
}

 return (
    <div className='allfault'>
     {
         all.map((aa)=>{
           return  <div className='all'>
    <div className='faultdiv'> 
        <div className='upperfault'> 
          <div className='faultnav'>
             <div className='faulttailnumber' > Tail Number:  <span style={{fontSize:'calc(1.2vw)'}} >N{aa.ac}</span>  </div> 
             <div className='faultstation'>Station: <span style={{fontSize:'calc(1.2vw)'}}  >{aa.station}</span> </div> 
             <div className='atadiv'>  ATA chapter: <span style={{fontSize:'calc(1.1vw)'}} > {aa.ata}</span> </div> 
            <div className='dateentered'>  Date entered:   <span style={{fontSize:'calc(1.1vw)'}}> {aa.timeFaultcreated}</span>  </div> 
            <div className='deletecomponent'> <Delete id={aa._id}/>  </div>  
          </div>
         <div className='shortfaultdiv '>Title-   <Link to ={`/onedetail/${aa._id}`}> <article style={{fontSize:'calc(0.9vw)', wordWrap: 'break-word',marginRight:'auto' }} >{aa.shortfault}</article></Link>  </div>
        </div>
      </div>
             
   </div>
               
                })
              }
              
    </div>
  )
 }

export default SingleFault

