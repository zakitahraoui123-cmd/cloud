import axios from "axios";
import { useState } from "react";
import useStore from './zustand.js';
import {useNavigate } from 'react-router';


export default function RecoverChecker() {
  const [code, setCode] = useState("");
  const [message,setmessage]=useState('')
      const userZu=useStore(state=>state.user)
        const userZUstand=useStore(state=>state.setUser)
        console.log(userZu)
  const navigat =useNavigate()
if(!userZu){
   {
        return(<>
        <div className='box-of-err' >
            <img className='err-img' src='/2065682.jpg' />
        </div>
        </>)
    } 
}
  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      alert("Please enter the 6-digit verification code.");
      return;
    }




  };
    
     async function checkotp(){
        
      if (!code || !userZu) return
      try {
       const responde = await axios.post('/api/updatePassword',
       { email:userZu,
        code:code },
       { withCredentials:true,
        timeout:3000
       }) 
       if(responde?.data?.message==='the code is correct'){
        navigat('/confirm')
        userZUstand(responde.data)
       }
  
      } catch (error) {
        console.error(error)
        console.log(error?.response)
         if(error.response?.data==='code is wronge'){
          setmessage('Invalid verification code.')
       setTimeout(()=>{
        setmessage('')
       },3000)
       }
      }
    }


  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>Code Verification</h2>

        <p style={styles.text}>
          Enter the 6-digit verification code sent to your email.
        </p>

        <input
          type="text"
          value={code}
          onChange={(e) =>
            setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
          placeholder="123456"
          style={styles.input}
        />

        <button 
        onClick={checkotp}
        type="submit" 
        
        style={code.length<6?styles.button2:styles.button}>
          Verify
        </button>
        <div style={{color:'red',marginTop:'1%'}}>{message}</div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
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
    border:'solid,black,1px'
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