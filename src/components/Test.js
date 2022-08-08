import React from 'react'

import axios from 'axios'
import {authAction} from '../store/faults'
import { useDispatch }  from 'react-redux'
import {sampleGet} from '../api/index.js'
const  Test=()=> {
  const aFunc= (key)=>{
   const data={name:'binyam',age:12}
    return async (dispatch)=>{
      await  dispatch(authAction.getUser(data))
   }

  }
return (
  <div>
 <button onClick={sampleGet}>test push</button>
   
    </div>
  )
}

export default Test

