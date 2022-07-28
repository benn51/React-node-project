import React from 'react'
import './home.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router'
import  jwtDecode from 'jwt-decode'


const Home = () => {
  const navigate= useNavigate()
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
         console.log(decodedGoogleToken)
const googleProfileobject= {name:decodedGoogleToken.name,email:decodedGoogleToken.email,token:googleToken}
          localStorage.setItem('profileObject',JSON.stringify(googleProfileobject))
       navigate('/signedin')
       console.log(googleProfileobject)
    }
 
  const [username,setUsername] = useState('')
  const[password,setPassword]=  useState('')

const failurelogin= (err)=>{
console.log(err)
}

  return (
    <div className='home'>
      <div className='uperhome'> 
    <p className='p'> AIRCRAFT FAULT TRACKER  </p>
    <div className='username'>
  <input className='userinp'   type="text" value={username} placeholder={"username"}/>
    </div>
<div className='password'>
<input className='passinp' type="text" value={password} placeholder={"password"}/>
</div>

<div className='manualbtndiv'>
 <button className='manualbtn'> Log In</button> 
</div>
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




