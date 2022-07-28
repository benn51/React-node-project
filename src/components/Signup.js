import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router'
import './signup.css'
const Signup = () => {
    const navigate= useNavigate()
    const [name,setName]= useState('')
    const [lastname,setLastname]= useState('')
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')

    const aFunc= (e)=>{
        setName(e.currentTarget.value)
    }
    const bFunc= (e)=>{
        setLastname(e.currentTarget.value)
    }
    const cFunc= (e)=>{
        setUsername(e.currentTarget.value)
    }
    const dFunc= (e)=>{
        setPassword(e.currentTarget.value)
    }
   const eFunc=(e)=>{
e.preventDefault()
const newUser={name:name,lastname:lastname,username:username,password:password}
setName('')
setLastname('')
setUsername('')
setPassword('')
console.log(newUser)
navigate('/signedin')
   }
  return (
    <div className='signup'>
       
        <form >  
<div className='signuplower'>
<div className='upper'><p className='p1'>Aircraft Fault Tracker</p>
     <p className='p2'> Sign Up To Track Aircraft Fault Records From All Stations </p>
        </div>
<div className='name'>
<input className='inpname'   placeholder='Name' type="text" value={name} onChange={aFunc}/>
<input className='inplastname' placeholder='Last name' type="text" value={lastname} onChange={bFunc}/>
 </div>
<div className='userdiv'>
    <input className='user2' placeholder='User Name' type="text" value={username} onChange={cFunc}/>
</div>
<div className='pasdiv'>
    <input className='pass2' placeholder='Password' type="text" value={password} onChange={dFunc}/>
</div>
<button type='submit' className='signupbtn' onClick={eFunc}> Signup</button>

</div>

</form>

 </div>
  )
}

export default Signup