import { Link, useNavigate } from 'react-router';
import './register.css'
import { useState } from 'react';
import useStore from './zustand.js';
import { useEffect } from 'react';
import axios from 'axios';

function Regeister(){
    const navigat= useNavigate()
    const [submit,setsubmit]=useState(true)
    const [errtext,seterrtext]=useState('')
    const userZu=useStore(state=>state.setUser)
    const [userinfo,setuserinfo]=useState({lastname:'',firstname:'',email:'',phone:'',password:''})
useEffect(()=>{
    setTimeout(()=>{
    seterrtext('')
},7000)
},[errtext])
function hundelinformation(e){

setuserinfo({...userinfo,
    [e.target.name]:e.target.value
})

}
async function submitform(e){
e.preventDefault()
if(!userinfo.lastname||!userinfo.firstname||!userinfo.phone||!userinfo.email||!userinfo.password){
    return seterrtext('Please fill out all the fields')

}else if(userinfo.password.length<8){
    return seterrtext('password must be more the 8 character')
}
try {
    const res= await axios.post('http://localhost:4000/api/sendOtp',{email:userinfo.email},{withCredentials:true})
    console.log(res)
    setTimeout(() => {
            navigat('/OTP')
        }, 700);
userZu(userinfo)
} catch (error) {
    console.error(error)
}
 
}
return (<div className='body-2'>
     <div className='home-button'>
    <button
    onClick={()=>navigat('/')}
    className='home-btn'>HOME</button>
  </div>
    <form onSubmit={submitform} className="big-box">
        <div className='name'>
         <img src='/user.png' className='user-icon' />

        <input
        name='lastname'
        onChange={hundelinformation}
        className='email' placeholder='Last Name' />
        </div>
        <div className='name'>
            <img src='/user.png' className='user-icon' />
        <input
        name='firstname'
        onChange={hundelinformation}
        className='email' placeholder='First Name' />
        </div>
        <div className='name'>
            <img  src='/touch.png' className='user-icon'/>
        <input
        name='phone'
        onChange={hundelinformation}
        placeholder='phone' className='email' />
        </div>
        
        
    <div className='email-box'>
    <img src='/mail.png' className='email-icon' />
    <input
    name='email'
    onChange={hundelinformation}
    className='email' type='text' placeholder='Email' />

    </div>
     <div className='password-box'>
        <img className='password-icon' src='/password.png' />
        <input
        name='password'
        onChange={hundelinformation}
        className='password' type='password' placeholder='Password' />
        
    </div>
        <div className='errtext-box'>
             <p className='errtext'>{errtext}</p>
        </div>
      <div className='quastion'> 
        <p style={{color:'white',fontSize:'18px'}}>have an account? </p>
         <div className='login-word'> <Link to='/login'>Login</Link></div>
       
      </div>


    <div className="flex items-center justify-center min-h-screen">
      <button
      onClick={()=>setsubmit(!submit)}
      className="rainbow-border">
        {submit===true?'Submit':<img className='wait-icon' src='/wait.gif' />}
        
      </button>
      </div>
</form>
 <footer>
        
          <div className="foting" >
            <img style={{width:'50%'}} src="/dots.gif" />
          </div>
          
        
      </footer>
</div>)
}

export default Regeister;