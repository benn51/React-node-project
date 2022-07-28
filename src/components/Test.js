import React from 'react'

import axios from 'axios'
import action from '../store/faults'
import { useDispatch }  from 'react-redux'
import {sampleGet} from '../api/index.js'
const  Test=()=> {
  const aFunc=async ()=>{
    const url= 'http://localhost:5000/home/the'
    const id = 'binyam'
  const {data}= await axios.get(`${url}/${id}` )
  console.log(data)

  }
return (
  <div>
 <button onClick={sampleGet}>test push</button>
   
    </div>
  )
}

export default Test

