import axios from 'axios';
import './login.css';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import useStore from './zustand';


function Login(){
  const [msgx,setmsgx] =useState('')
  const [input,setinput]=useState({email:'',password:''})
  const [emailCheck,setemailCheck]=useState('')
  const userZUstand=useStore(state=>state.setUser)
  const navigat =useNavigate()
  async function userLogin(){
    if (!input.email||!input.password) return setmsgx('please feil up all the field')
try {
     const res= await axios.post('http://localhost:4000/api/login',input,{withCredentials:true})
     const message=res.data
     
     if(message.id){
           userZUstand(message)
          navigat('/welcome')
     }
     if(message.message==='nothing'){
      setemailCheck('click on register to open account')
     }

} catch (error) {
  console.error(error)
}  
  }
  
return (
<div className='body-2'>
  <div className='home-button'>
    <button
    onClick={()=>navigat('/')}
    className='home-btn'>HOME</button>
  </div>

<div className="big-box">
    <div className='email-box'>
    <img src='/mail.png' className='email-icon' />
    <input 
            onChange={(e)=>setinput(pre=>({...pre,email:e.target.value}))}

    name='email'
    className='email' type='text' placeholder='Email' />

    </div>
     <div className='password-box'>
        <img className='password-icon' src='/password.png' />
        <input 
        name='password'
        onChange={(e)=>setinput(pre=>({...pre,password:e.target.value}))}

        className='password' type='password' placeholder='Password' />

    </div>
      <div className='quastion'>
        <p className='textM'>Dont Have An Account ?</p>
        <div className='login-word'> <Link to='/register'>Register</Link></div>
      </div>

    <div className="flex items-center justify-center min-h-screen">
      <button
      onClick={userLogin}
      
      className="rainbow-border">
        Login
      </button>
      </div>
      <p className='err-text'>{msgx}</p>
      <p className='err-text'>{emailCheck}</p>

      <div className='recover'>
  <div style={{height:'50%',display:'flex',fontSize:'18px',justifyContent:'center',color:'white'}}>Forgot Password ?</div>
  <button 
  onClick={()=>navigat('/recover')}
  className='login-word'>Recover</button>
</div>

</div>
 <footer>
        
          <div className="foting" >
            <img style={{width:'50%'}} src="/dots.gif" />
          </div>
          
        
      </footer>

</div>)
}

export default Login;