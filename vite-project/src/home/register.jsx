import { Link, useNavigate } from 'react-router';
import './register.css'
import { useState } from 'react';
import useStore from './zustand.js';
import axios from 'axios';

function Regeister(){
    const navigat= useNavigate()
    const [submit,setsubmit]=useState(true)
    const userZu=useStore(state=>state.setUser)
    const [userinfo,setuserinfo]=useState({lastname:'',firstname:'',email:'',phone:'',password:''})

function hundelinformation(e){

setuserinfo({...userinfo,
    [e.target.name]:e.target.value
})

}
console.log(userinfo.lastname.length)

async function submitform(e){
e.preventDefault()
if(!userinfo.lastname||!userinfo.firstname||!userinfo.phone||!userinfo.email||!userinfo.password){
    return alert('Please fill out all the fields')

}
try {
    const res= await axios.post('/api/sendOtp',{email:userinfo.email},{withCredentials:true})
    if (res.data==='we send the otp'){
        setsubmit(!submit)
 setTimeout(() => {
            navigat('/OTP')
        }, 1000);
userZu(userinfo)
     }
   
} catch (error) {
    console.error(error)
}
 
}
return (<div className='body-r'>
     <div className='home-button-r'>
    <button
    onClick={()=>navigat('/')}
    className='home-btn'>
         <img className='arrwo' src='arrow.png' />
        Back to Home</button>
  </div>
    <form onSubmit={submitform} className="big-box-r">
        <div className='email-box-r'>

        <input
        name='lastname'
        onChange={hundelinformation}
        className='email-r' placeholder='Last Name' />
        </div>
        <div className='email-box-r'>
        <input
        name='firstname'
        onChange={hundelinformation}
        className='email-r' placeholder='First Name' />
        </div>
        <div className='email-box-r'>
        <input
        name='phone'
        onChange={hundelinformation}
        placeholder='phone' className='email-r' />
        </div>
        
        
    <div className='email-box-r'>
    <input
    name='email'
    onChange={hundelinformation}
    className='email-r' type='text' placeholder='Email' />

    </div>
     <div className='email-box-r'>
        <input
        name='password'
        onChange={hundelinformation}
        className='email-r' type='password' placeholder=' password A bcd1234' />
        
    </div>
        <div className={userinfo.password.length<12 && userinfo.password.length!==0?'errtext2-box' :'errtext-box'}>
             {userinfo.password.length<12 && userinfo.password.length!==0? <p style={{color:'white',padding:'1.5%'}}>password to short</p>:''}
        </div>
      <div className='log-quastion-r'> 
        <p className='ask-r'>have an account ? </p>
         <p className='ask2-r'> <Link to='/login'>Login</Link></p>
       
      </div>


    <div className="submit">
      {submit===true?<button
      onClick={submitform}
      className="submit-r">
        Submit
        
      </button>:<img className='wait-icon-r' src='/wait.gif' />}
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