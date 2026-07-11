import { useState } from "react";
import  useStore  from "./zustand.js";
import axios from "axios";
import { useNavigate } from "react-router";

export default function ConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const userinfo = useStore(state=>state.user)
  const navigat =useNavigate()
  if(!userinfo?.message!=='the code is correct'
    && 
    !userinfo?.email
     &&
      !userinfo?.code
    ){
   {
        return(<>
        <div className='box-of-err' >
            <img className='err-img' src='/2065682.jpg' />
        </div>
        </>)
    } 
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
        const response = await axios.post(`/api/newpassword/${password}/${userinfo.email}`,{withCredentials:true})
        if(response.data==='this email not exist'){
            return setMessage('this email not exist')
        }
        if (response?.data?.message==='login'){
        setMessage("Password updated successfully!");
        setTimeout(() => {
            navigat('/login')
        }, 1000);

        }
     } catch (error) {
        console.log(error)
    }

  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <p style={styles.text}>
          Enter your new password and confirm it.
        </p>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />

        <label style={styles.showPassword}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <span style={{ marginLeft: "8px" }}>Show Password</span>
        </label>

        <button
          type="submit"
          style={
            password.length < 8 || password !== confirmPassword
              ? styles.button2
              : styles.button
          }
        >
          Reset Password
        </button>

        <div style={styles.message}>{message}</div>
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
    border: "1px solid black",
  },

  text: {
    color: "#423a3a",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #070707",
    borderRadius: "6px",
    outline: "none",
    marginBottom: "15px",
    boxSizing: "border-box",
  },

  showPassword: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    color: "#423a3a",
    fontSize: "15px",
    cursor: "pointer",
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
  },

  button2: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#a1c4e9",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },

  message: {
    color: "red",
    marginTop: "15px",
    minHeight: "20px",
  },
};