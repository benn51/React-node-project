import React from 'react'
import {useSelector} from 'react-redux'
const Filteredfault = () => {
    const allfaults= useSelector(state=>state.fault.map((aa)=>{return aa}))
    const filterFnc=()=>{
        console.log('checked')
    }
  return (
      
      <div>
  allfaults.filter()
    </div>

      
   
  )
}

export default Filteredfault