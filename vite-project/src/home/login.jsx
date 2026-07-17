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
     const res= await axios.post('/api/login',input,{withCredentials:true})
     const message=res.data
     console.log(message)
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
    className='home-btn'>
      <img className='arrwo' src='arrow.png' />
      Back to Home</button>
  </div>

<div className="big-box">
    <div className='email-box-l'>
    <input 
            onChange={(e)=>setinput(pre=>({...pre,email:e.target.value}))}

    name='email'
    className='email-l' type='text' placeholder='Email' />

    </div>
     <div className='password-box-l'>
        <input 
        name='password'
        onChange={(e)=>setinput(pre=>({...pre,password:e.target.value}))}
        className='password-l' type='password' placeholder='Password' />

    </div>
       <div className='recover'>
  <button 
  onClick={()=>navigat('/recover')}
  className='forgot'>Forget Password ? </button>
</div>
     <div className="login-div">
      <button
      onClick={userLogin}
      
      className="rainbow-border">
        Login
      </button>
      </div>
      
      <div className='quastion'>
        <div className='textM'> <Link to='/register'>Dont Have An Account ?</Link></div>
      </div>

   
      <p className='err-text'>{msgx}</p>
      <p className='err-text'>{emailCheck}</p>

   

</div>
 <footer>
        
          <div className="foting" >
            <img style={{width:'50%'}} src="/dots.gif" />
          </div>
          
        
      </footer>

</div>)
}

export default Login;