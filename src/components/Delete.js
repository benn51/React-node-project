import React from 'react'
import {delFunc} from '../api/index'
import './delete.css'
import { useDispatch } from 'react-redux'
const Delete = ({id}) => {
    const dispatch = useDispatch()
  return (
    <div className='delete'>
 <div className='btn1'>
<button className='btn' onClick={()=>{dispatch(delFunc(id))}}> delete</button>
    </div>
    </div>
   
  )
}

export default Delete