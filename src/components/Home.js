import React from 'react'
import './home.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router'
import  jwtDecode from 'jwt-decode'
import {authAction} from '../store/faults'

const Home = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const [isemail,setIsemail]= useState(false)
  const [emailOrusername,setEmailOrusername]= useState('')
  const [password,setPassword]= useState('')
  const [enteredcredential,setEnteredcredential]=useState(true)
useEffect(()=>{
   /*global google */
  google.accounts.id.initialize({
    client_id:	"166059900103-ms2q3t8ppn752v8371abhn3s2ahmmf6r.apps.googleusercontent.com",
    callback: handleCallbackResponse 
  })
  google.accounts.id.renderButton(document.getElementById('googlebtn'),{
    theme: "filled_blue", size: "medium", width: "200.043",logo_alignment: "left",shape: "rectangular"
  } )
},[]) 
// google login handler function
 const handleCallbackResponse= async (response)=>{
 const googleToken= await response.credential
const decodedGoogleToken= jwtDecode(googleToken)
const name= decodedGoogleToken.name
dispatch(authAction.displayLogedinUser(name))
  localStorage.setItem('authToken',JSON.stringify({token:googleToken}))
  localStorage.setItem('loggedinuser',JSON.stringify({iname:name}))
  
  navigate('/signedin')
dispatch( authAction.authenticateUser(true))  // to protect the athenticated  route from acessed from the url
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
    
    }
    // user login and authentication form using created account 
    const tFunc=async()=>{
        //'http://localhost:500/' 
      const url= 'https://biniapp-3.herokuapp.com/home/userlogin'   
    
      const userObj= {userOremail:emailOrusername,password:password,isEmail:isemail}
    const {data}= await axios.post(url,userObj)
      if(data.status==='ok'){
        const user= data.msg
        const lname= user[0].lastname
        const name= user[0].name
        const fname =name +' ' +lname
        console.log(fname.length)
        //added code to prevent empty entry
        if(fname.length>1){
              dispatch(authAction.displayLogedinUser(fname))
             navigate('/signedin')
              localStorage.setItem('loggedinuser',JSON.stringify({iname:name}))
              localStorage.setItem('authToken',JSON.stringify({token:data.acessToken}))
               dispatch( authAction.authenticateUser(true))  //// to protect the athenticated route from getting acessed from the url
             }
             else{
              setEnteredcredential(false)
            }
      
    }
    else{
      setEnteredcredential(false)
    }
    
    }
const cFunc=(e)=>{
e.preventDefault()
tFunc()
setIsemail(false)
setEmailOrusername('')
setPassword('')
    }
  
  return (
    <div className='home'>
      <div className='uperhome'> 
   <div><p className='p'> AIRCRAFT FAULT TRACKER  </p></div> 
   
    <form >
       <div className='username'>
  <input className='userinp' name='usernameOrEmail'   type="text" value={emailOrusername} onChange={aFunc} placeholder={"Username or Email"}/>
    </div>
<div className='password'>
<input className='passinp' type="password" name='password' onChange={bFunc} value={password} placeholder={"password"}/>
</div>

<div  className='manualbtndiv'>
 <button type='submit' className='manualbtn' onClick={cFunc}> Log In</button> 
</div>
    </form>
   
<div className='or'>------------------or ------------------    </div>
   <div className={!enteredcredential? 'incorrectcredential':"nodisplay"}>  incorrect credential </div>

<div id='googlebtn'></div>
 </div>

   <div className='lowerhome'>
     <p className='plower'>Don't have an account ?  <Link to={'/Signup'}>Sign up</Link> </p>
   </div>
    </div>
  )
}

export default Home




