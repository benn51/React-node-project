import React from 'react'

import SingleFault from './SingleFault'
import {getAllFaults} from '../api/index.js'
import {useDispatch} from 'react-redux'
const AllFaults = () => {
const dispatch= useDispatch()
 const hFunc = ()=>{
dispatch(getAllFaults())
 }
return (
     <div className='retal'>
      <SingleFault/> 
     </div>
        )
   
}

export default AllFaults