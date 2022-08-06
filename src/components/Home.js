import React from 'react'
import './home.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router'
import  jwtDecode from 'jwt-decode'


const Home = () => {
  const navigate= useNavigate()
  const [isemail,setIsemail]= useState(false)
  const usernameOrEmail = useSelector(state=>state.authentication.reducer)
  const [emailOrusername,setEmailOrusername]= useState('')
  const [password,setPassword]= useState('')
useEffect(()=>{
   /*global google */
  google.accounts.id.initialize({
    client_id:	"166059900103-ms2q3t8ppn752v8371abhn3s2ahmmf6r.apps.googleusercontent.com",
    callback: handleCallbackResponse 
  })
  google.accounts.id.renderButton(document.getElementById('googlebtn'),{
    theme: "outline", size: "large"
  } )
},[]) 

 const handleCallbackResponse=(response)=>{
 const googleToken= response.credential
const decodedGoogleToken= jwtDecode(googleToken)
       const googleProfileobject= {name:decodedGoogleToken.name,email:decodedGoogleToken.email,token:googleToken}
          localStorage.setItem('profileObject',JSON.stringify(googleProfileobject))
       navigate('/signedin')
    }
    const aFunc=(e)=>{
      const emailcheck=e.currentTarget.value
      setEmailOrusername(emailcheck)
    
      if(emailOrusername.includes('@')){
       setIsemail(true)
       }
    }
    const bFunc=(e)=>{
     setPassword(e.currentTarget.value)
     console.log(password)
    }
    const tFunc=async()=>{
      const url= 'http://localhost:5000/home/userlogin'
      const userObj= {userOremail:emailOrusername,password:password,isEmail:isemail}
    const {data}= await axios.post(url,userObj)
    if(data.status==='ok'){
  navigate('/signedin')
    }
    console.log(data)
    }
    const cFunc=(e)=>{
e.preventDefault()
console.log('submitted')
tFunc()
setIsemail(false)
    }
  
  return (
    <div className='home'>
      <div className='uperhome'> 
    <p className='p'> AIRCRAFT FAULT TRACKER  </p>
    <form >
       <div className='username'>
  <input className='userinp' name='usernameOrEmail'   type="text" value={emailOrusername} onChange={aFunc} placeholder={"Username or Email"}/>
    </div>
<div className='password'>
<input className='passinp' type="text" name='password' onChange={bFunc} value={password} placeholder={"password"}/>
</div>

<div className='manualbtndiv'>
 <button type='submit' className='manualbtn' onClick={cFunc}> Log In</button> 
</div>
    </form>
   
<div className='or'>------------------or ------------------    </div>


<div className='btngoogle'>
<div id='googlebtn'></div>
   </div>
   </div>

   <div className='lowerhome'>
     <p className='plower'>Don't have an account ?  <Link to={'/Signup'}>Sign up</Link> </p>
   </div>
    </div>
  )
}

export default Home




