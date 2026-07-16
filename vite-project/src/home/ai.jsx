import axios from 'axios';
import './ai.css';
import './dashboard.css'
import useStore from './zustand';
import { useEffect, useRef, useState } from 'react';

function Aimode({mode,value,translate}){
      const userinfo=useStore(state=>state.user)
      const [images,setimages] =useState([])
      const [display,setdisplay] = useState([{userText:'',ai:''}])
      const [message,setmessage]=useState({user:''})
      const [choosen,setchoosen]=useState()
      const [trueimg,settrueimg]=useState(false)
      const [email,setemail]=useState(false)
      const checker = useStore(state=>state.user)

      const [msgx,setmsgx]=useState({first:`${translate?'':'welcom'} ${userinfo.firstname}${translate?'さん':''}`,sconde:`${!translate?'To Ai Search':'AI 検索へようこそ！'}`})
        const Airef = useRef(null)
       const topResult=`${translate?'検索結果トップ':'TOP RESULTE'}`
        useEffect(()=>{
            Airef.current?.scrollIntoView({behavior:'smooth'})
        },[display])
    async function sendQuastion(){
        setemail(true)
      if(!message.user) return console.log('no message')
        const user=message.user
    setdisplay(pre=>[...pre,{userText:user}])
        setmessage({user:""})
        try {
            const res=await axios.post(`/api/quastion/${userinfo.id}`,{message},{withCredentials:true})
            const pictures= res?.data
            
            if (pictures.length!==0){
                settrueimg(true)
                setemail(false)

                  
            }
           
            const fixpath =pictures.map(item=>(
                item.path.replace('\\','/')
            ))
            setchoosen('')
           const img = fixpath[0]
           setimages(img)
            setdisplay(pre=>[...pre,{ai:fixpath}])
                  

            

        } catch (error) {
            console.error(error)
        }
    }
    
   useEffect(()=>{
        setTimeout(() => {
       if(translate){
         setmsgx({
            first:'画像を検索するには、',
            sconde:'覚えている内容を入力してください。'
        })
       }else{
        setmsgx({
            first:'in order to finde any pictue please discribe by',
            sconde:'writing what you remamber about that picture'
        })
       }
       }, 2500);
   },[translate])
    
    
     
    return(
          <div className='aiX'>
        
    
                <div className="first">
                    <div className='up-first'>
                        
                    <div className='ai-place'> {value===true?<button
                    title={translate?'ホーム':'HOME'}
                onClick={()=>mode(!value)}
                className='light'><img  className='light-icon' src='light.gif' /></button>:''}
                    </div>
                   
                 <div className='info'>
                    <div className='message'>
                        {trueimg===true &&display?.map((item,i)=>(
                            <div className='display' key={i}>
                              {item.userText?<div className='answer'>
                                 <div className='answer-div'>
                                     <img className='avatarUser' src='./meerkat.png' />
                                <p className='textMessage'>{item.userText}</p>
                                 </div>                                
                              </div>:''}
                              {item.ai?
                                 <div 
                                 ref={Airef}
                                 className='ai-picture' >
                                  
                                 <img style={{width:'19%',position:'relative',left:'-6px'}} src='dots.gif' />
                                 
                                    <div className='other-img'>
                                         {window.innerWidth<685?<p className='top'>TOP RESULTE</p>:''}
                                        {item?.ai?.map((e)=>(
                                                  <button 
                                    
                                  value={e}
                                  onClick={()=>setchoosen(e)}
                                  className='small-btn-img'>
                                   
                                    <img className='small-img' src={`/${e}`}/>
                                  </button>
                                        ))}
                                  
                                    
                                  
                                 </div>
                                 
                               
                               </div>:''
                            
                            }
                              
                            </div>
                        ))}
                        {trueimg===false?
                        <div className='welcom' >
                             <div className='first-word'>{msgx.first}</div>
                            <div className='seconde-word'> {msgx.sconde} </div>
                             </div>:''}
                    </div>
                    <div className='input-box'>
                        <input
                        value={message.user}
                        onChange={(e)=>setmessage({user:e.target.value})}
                        placeholder={translate?'検索してください':'Search Here'}
                        className='input' 
                         onKeyDown={(event)=>{
                           if(event.key==='Enter'){
                            sendQuastion()
                           }
                        }}
                        />
                        <button 
                        
                       onClick={sendQuastion}
                        className='button'>
                            {email===true?
                            (window.innerWidth>685?<img className='email-iconai' src='/email.gif' />:'')
                            :(translate?'送信':'send')}
                            </button>
                    </div>
                 </div>
                </div>
                   

                    
                </div>
                   <div className='second'>
                    <div className='image-place'>
                        {trueimg===true? 
                         <div className='ai-result'> 
                            <p style={{color:'green',fontWeight:'600'}}>{choosen?'':`~${topResult}~`}</p>
                            <div className='top-result-div'>
                             <img className='result-img'  src={`/${choosen?choosen:images}`} />

                            </div>
                            </div>
                           
                        :''} 
                    </div>
                   </div>
                </div>
                
    )
}



export default Aimode;
