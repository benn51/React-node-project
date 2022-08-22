import React from 'react'
import './helpdetail.css'
import { useParams } from 'react-router'
const Helpdetail = () => {
    const {type} = useParams()
const detailArray=[
  {type:'instruction',detail:`to start using the app you must first sign in using either your google account or by creatind a useraccount ad strong password
  . if you are creating your own personal account user name is optional. you can create a user name.`
},

  {type:'getdata',detail:`to start using the app you must first sign in using either your google account or by creatind a useraccount ad strong password
  . if you are creating your own personal account user name is optional. you can create a user get data.`
},
  { type:'enteredata',detail:`to start using the app you must first sign in using either your google account or by creatind a useraccount ad strong password
  . if you are creating your own personal account user name is optional. you can create a user enter data.`
},

 { type:'contact',detail:`to start using the app you must first sign in using either your google account or by creatind a useraccount ad strong password
  . if you are creating your own personal account user name is optional. you can create a user contact.`},
  { type:'signup',detail:`to start using the app you must first sign in using either your google account or by creatind a useraccount ad strong password
  . if you are creating your own personal account user name is optional. you can create a signup.`}
]

let  newarr= detailArray.find((one)=>one.type === type)

  return (
   <div className='helpdetail'>
   <p className='detailp'>{newarr.detail}</p>

</div>
  )
}

export default Helpdetail