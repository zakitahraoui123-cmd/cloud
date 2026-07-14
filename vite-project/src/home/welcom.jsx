import { useNavigate } from 'react-router';
import './login.css'


function Welcome(){
    const navigate=useNavigate(null)
    setTimeout(()=>{
        navigate('/dash')
    },1400)
return (<div className='body-x'>
    <div className="big-box-x">
    <div className='video-box'>
    <img className='video' src='loading.gif' />

    </div>

</div>

</div>)
}

export default Welcome;