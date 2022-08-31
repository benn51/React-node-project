import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import './signup.css'
import { createNewuser} from '../api/index.js'
import { useSelector,useDispatch } from 'react-redux'
import {authAction} from '../store/faults'
import { FaWindows } from 'react-icons/fa'
const Signup = () => {
    const API= axios.create({baseURL:" https://ben-fault-recorder-2.herokuapp.com/" })   
API.interceptors.request.use((req)=>{
const token= JSON.parse(localStorage.getItem('authToken')).token
req.headers.authorization = `Bearer ${token}`
return req;
})
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [name,setName]= useState('')
    const [lastname,setLastname]= useState('')
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [email,setEmail]= useState('')
    const [check,setCheck]= useState({namee:true,lastnamee:true,emaile:true,passworde:true,auth:true,isauthenticated:false})
  
    const aFunc= (e)=>{
        const newname= e.currentTarget.value
        setName(newname)
      
    }
    const bFunc= (e)=>{
        const lname= e.currentTarget.value
        setLastname(lname)
    }
    const cFunc= (e)=>{
        setUsername(e.currentTarget.value)
    }
    const dFunc= (e)=>{
        const pwd= e.currentTarget.value
        setPassword(pwd)
    }
    const fFunc=(e)=>{
        const mail= e.currentTarget.value
        setEmail(mail)
        setCheck({...check,isAuthenticated:true})
    }
    const hFunc=(e)=>{
  const currentName= e.currentTarget.name
  const currentVal= e.currentTarget.value  
   if(currentVal){
       setCheck({...check,[currentName]:true})
   }
   else{
    setCheck({...check,[currentName]:false}) 
   }
  
    }
    //function to check if sign up form is filled properly and email is not registered already in the database
    const createNewuser= async ()=>{
        //const url='http://localhost:5000/home/newuser'
       const url= "https://biniapp-3.herokuapp.com/home/newuser"
        if(check.namee && check.lastnamee && check.emaile &&  check.passworde ){
            setCheck({...check,auth:true})
            const newUser={name:name,lastname:lastname,email:email,username:username,password:password} 
            const {data} = await axios.post(url,newUser)
       if(data.msg==='error'){
           console.log('user already exists ')
           window.alert('user already exists')
          }
       else{
        navigate('/home')
           console.log('user registerded sucessfully')
           window.alert('user registered succesfully')
          }
     }
     else{
        setCheck({...check,auth:false})
     }
    }
const eFunc=(e)=>{
e.preventDefault()
createNewuser()
setName('')
setLastname('')
setUsername('')
setPassword('')
setEmail('')

   }
return (
    <div className='signup'>
        <div className='allsignup'>
            <form >  
<div className='upper'><p className='p1'>Aircraft Fault Tracker</p>
     <p className='p2'> Sign Up To Track Aircraft Fault Records From All Stations </p>
        </div>
<div className='name'>
<input className={check.namee?'inpname':'noname'} name='namee'  placeholder='Name' type="text" value={name} onBlur={hFunc}  onChange={aFunc}/>
<input className={check.lastnamee?'inplastname':'nolastname'} name='lastnamee' placeholder='Last name' type="text" value={lastname} onBlur={hFunc}  onChange={bFunc}/>
 </div>
 <div className='emaildiv'>
    <input className={check.emaile?'email':'noemail'} name='emaile' placeholder='Email' type="text" value={email} onBlur={hFunc}  onChange={fFunc}/>
</div>
<div className='userdiv'>
    <input className='user2' placeholder='User Name' type="text" value={username} onMouseOut={hFunc}  onChange={cFunc}/>
</div>
<div className='pasdiv'>
    <input className={check.passworde?'pass2':'nopassword'} name='passworde' placeholder='Password' type="text" value={password} onBlur={hFunc} onChange={dFunc}/>
</div>
<div  className={check.auth?'noauth':'auth'}>
    <p> fill required fields</p>
</div>
<div className='supBtnDiv'>
    <button type='submit' className='signupbtn' onClick={eFunc}> Signup</button>
</div>


</form>
        </div>
        

 </div>
  )
}

export default Signup