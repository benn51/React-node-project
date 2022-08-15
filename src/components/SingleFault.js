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
           <div className='faultdiv'> 
           <span className='tailnumber'>Tail Number:{aa.ac}  Station: {aa.station} </span> 
            <span className='tailnumber'>  Date entered: dat3</span>
             <p className='fault'>Fault Description {aa.fault}</p> 
          </div>
              <div className='deletecomponent'> <Delete id={aa._id}/>  </div>   
              </div>
               
                })
              }
    </div>
  )
}

export default SingleFault