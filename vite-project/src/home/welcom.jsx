import { useNavigate } from 'react-router';
import './login.css'


function Welcome(){
    const navigate=useNavigate(null)
    setTimeout(()=>{
        navigate('/dash')
    },166666400)
return (<div className='body-x'>
    
    
    <img className='image-welcom' src='loading.gif' />

    



</div>)
}

export default Welcome;