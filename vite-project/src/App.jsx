import Login from "./home/login"
import Regeister from "./home/register"
import { Routes, Route } from "react-router-dom";
import Welcome from "./home/welcom";
import Dashboard from "./home/dashboard";
import RollHome from "./home/RollHome";
import VerifyCode from "./home/OTP";


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<RollHome />}/>
        <Route path='/register' element={<Regeister />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/Welcome' element={<Welcome />} />
        <Route path ='/dash' element={<Dashboard />} />
        <Route path="/OTP" element={<VerifyCode />} />
    </Routes>
    
    </>
  )
}

export default App
