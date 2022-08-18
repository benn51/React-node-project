import React from 'react'

import SingleFault from './SingleFault'
import {getAllFaults} from '../api/index.js'
import {useDispatch} from 'react-redux'
import { previousPagefunc,nextPagefunc } from '../api/index.js'
const AllFaults = () => {
const dispatch= useDispatch()
 const hFunc = ()=>{
dispatch(getAllFaults())
 }
return (
     <div className='retal'>
             <div>
          <button onClick={nextPagefunc}>Next Page</button>
          <button onClick={previousPagefunc}>Previous Page</button>
  </div>
   <div> <SingleFault/>  </div>  
  
     </div>
        )
   
}

export default AllFaults