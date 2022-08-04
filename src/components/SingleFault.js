import React from 'react'
import Delete from './Delete.js'
import './singlefault.css'
import {useSelector} from 'react-redux'

const SingleFault = () => {
 const all= useSelector(state=>state.fault.map((aa)=>{return aa}))
 return (
    <div className='allfault'>
          {
         all.map((aa)=>{
         return  <div className='all'>
        <p>Aircraft : <span className='airc'>{aa.ac}</span> ProblemStation: <span className='station'>{aa.station} </span>  Fault Discription: <span className='fault'> {aa.fault}</span> </p>
                     <Delete id={aa._id}/>
              </div>
               
                })
              }
    </div>
  )
}

export default SingleFault