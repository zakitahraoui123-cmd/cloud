import { useNavigate } from 'react-router';
import './register.css'


function Welcome(){
    const navigate=useNavigate(null)
    setTimeout(()=>{
        navigate('/dash')
    },4000)
return (<div className='body-2'>
    <div className='home-button'>
    
  </div>
    <div className="big-box">
    <div className='video-box'>
    <video className='video' autoPlay muted><source src='/Video.mp4' /></video>

    </div>

</div>

</div>)
}

export default Welcome;