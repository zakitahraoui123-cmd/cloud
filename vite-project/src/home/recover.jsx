import axios from "axios";
import { useState } from "react";
import useStore from './zustand.js';
import {useNavigate } from 'react-router';


export default function Recover() {
  const [email, setemail] = useState("");
  const [wait,setwait]=useState(false)
  const userZUstand=useStore(state=>state.setUser)
  const navigat =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();






  };
    
     async function checkotp(){
      if (!email) return
      setwait(true)
      try {
       const responde = await axios.post(`/api/recover/${email}`,{withCredentials:true})    
    if(responde?.data?.message==='we send the otp'){
      userZUstand(email)

      setwait(false)
      navigat('/checkOtp')
    }
      
        
     }
       catch (error) {
    console.error(error)
    setwait(false)
     alert("Please check your email to continue the password reset process.");
      return;
      }
    }

console.log(wait)
  return (
    <div style={styles.container}>
         <div className='home-button'>
    <button
    onClick={()=>navigat('/')}
    className='home-btn'>HOME</button>
  </div>
    <form style={styles.card} onSubmit={handleSubmit}>
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
         {wait===false? 'Send Code':<img style={styles.wait} src="/wLoader.gif" />}
        </button>
    
      </form>
    </div>
  );
}

const styles =window.innerWidth>650? {
  container: {
    height: "100vh",
    width:'100%',
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
     display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: "100%",
    height:'25%',
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#ffffff",
    marginBottom:'12%',
    fontSize: "16px",
    cursor: "pointer",
  }, 
   button2: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: "100%",
    marginBottom:'12%',
    height:'25%',
    border: "none",
    borderRadius: "6px",
    background: "#a1c4e9",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },
  wait:{
    width:'16%',
  }
  
}: {
  container: {
    height: "100vh",
    width:'100%',
    display: "flex",
   flexDirection: 'column',
    alignItems: "center",
    background: "linear-gradient(to right, #CC86D1, #DCFFBD)",
  },
  card: {
    width: "300px",
    height:'60%',
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
    fontSize: "15px",
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
    fontSize: "15px",
    textAlign: "center",
    letterSpacing: "8px",
    border: "1px solid #070707",
    borderRadius: "6px",
    outline: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  button: {
     display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: "100%",
    height:'16%',
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#ffffff",
    marginBottom:'12%',
    fontSize: "16px",
    cursor: "pointer",
  }, 
   button2: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: "100%",
    marginBottom:'12%',
    height:'16%',
    border: "none",
    borderRadius: "6px",
    background: "#a1c4e9",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },
  wait:{
    width:'20%',
  }
  
}