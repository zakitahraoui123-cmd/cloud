import axios from "axios";
import { useState } from "react";
import useStore from './zustand.js';
import {useNavigate } from 'react-router';


export default function Recover() {
  const [email, setemail] = useState("");
  const [message,setmessage]=useState('')
  const [codeSended,setcodesende]=useState('')
  const [code,setCode]=useState('')
      const userZu=useStore(state=>state.user)
        const userZUstand=useStore(state=>state.setUser)
  const navigat =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();






  };
    
     async function checkotp(){
      if (!email) return
      try {
       const responde = await axios.post('/api/recover',email,{withCredentials:true})    
      if(responde.data==='we send the code'){
        setcodesende('1')
      }
      
        
     }
       catch (error) {
    console.error(error)
      }
    }


  return (
    <div style={styles.container}>
         <div className='home-button'>
    <button
    onClick={()=>navigat('/')}
    className='home-btn'>HOME</button>
  </div>
    {  codeSended===''?<form style={styles.card} onSubmit={handleSubmit}>
        <h2>Password Recovery</h2>

        <p style={styles.text}>Send Reset Code 

        </p>

        <input
          type="text"
          value={email}
          onChange={(e) =>
            setemail(e.target.value)
          }
          placeholder="ENTER YOUR EMAIL"
          style={styles.input}
        />

        <button 
        onClick={checkotp}
        type="submit" 
        
        style={!email?styles.button2:styles.button}>
          Send Code
        </button>
        <div style={{color:'red',marginTop:'1%'}}>{message}</div>
      </form>: <form style={styles.card} onSubmit={handleSubmit}>
        <h2>OTP Code Verification</h2>

        <p style={styles.text}>
          Enter the 6-digit OTP code sent to your email.
        </p>

        <input
          type="text"
          value={code}
          onChange={(e) =>
            setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
          placeholder="123456"
          style={styles.inputs}
        />

        <button 
        onClick={checkotp}
        type="submit" 
        
        style={code.length<6?styles.button2:styles.button}>
          Verify
        </button>
        <div style={{color:'red',marginTop:'1%'}}>{message}</div>
      </form>}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
   flexDirection: 'column',
    alignItems: "center",
    background: "linear-gradient(to right, #CC86D1, #DCFFBD)",
  },
  card: {
    width: "350px",
    background: "linear-gradient(to right, #CC86D1, #DCFFBD)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    border:'solid,black,1px',
    marginTop:'10%'
  },
  text: {
    color: "#423a3a",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "20px",
    textAlign: "center",
    
    border: "1px solid #070707",
    borderRadius: "6px",
    outline: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
   inputs: {
    width: "100%",
    padding: "12px",
    fontSize: "20px",
    textAlign: "center",
    letterSpacing: "8px",
    border: "1px solid #070707",
    borderRadius: "6px",
    outline: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },  button2: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#a1c4e9",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  }
  
};