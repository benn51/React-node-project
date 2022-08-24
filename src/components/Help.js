import React,{useState} from 'react'
import './help.css'
import { useParams,Link } from 'react-router-dom'
const Help = () => {
const {id}= useParams()
const[menu,setMenu] =useState(false)
const [showobject,setShowobject]= useState({first:false,second:false,third:false,forth:false})
const showMenu=()=>{
  setMenu(!menu)
}

 
  const showFunc=(e)=>{
this.className='titson'
  console.log(this.className)
  }
  return (
   <div className='help'>

<div className='allhelp'>
  <div>
<li className='first' onClick={()=>{setShowobject({...showobject,first:!showobject.first})}}> first item from the help menu</li>
<p className= {showobject.first?'showdetail':'noshow'}>this is th edetail description that is supposed to come and go from wahtklskld</p>
</div>
<div className='second' onClick={()=>{setShowobject({...showobject,second:!showobject.second})}}> first item from the help menu
<p className= {showobject.second?'showdetail':'noshow'}>this is th edetail description that is supposed to come and go from wahtklskld</p>
</div>
<div className='third' onClick={()=>{setShowobject({...showobject,third:!showobject.third})}}> first item from the help menu
<p className= {showobject.third?'showdetail':'noshow'}>this is th edetail description that is supposed to come and go from wahtklskld</p>
</div>
<div className='forth' onClick={()=>{setShowobject({...showobject,forth:!showobject.forth})}}> first item from the help menu
<p className= {showobject.forth?'showdetail':'noshow'}>this is th edetail description that is supposed to come and go from wahtklskld</p>
</div>
</div>
   </div>
  )
}

export default Help