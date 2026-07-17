import {useEffect, useRef, useState } from 'react';
import './dashboard.css';
import {Progress} from '@chakra-ui/react';
import CountUp from '../component/CountUp'
import {  motion} from 'framer-motion';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import useStore from './zustand';
import {useNavigate } from 'react-router';
import axios from 'axios';
import Aimode from './ai';
import imageCompression from 'browser-image-compression';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {io} from 'socket.io-client';
    


 function Dashboard(){
    const [file,setfile]=useState([])
    const [viewall,setviewall]=useState()
    const [galery,setgalery]=useState(false)
    const [imageUrl,setimageUrl]=useState()
    const [translate,settranslite]=useState(false)
    const [notimage,setnotimage]=useState(false)
    const [totalLoad,settotalLoad]=useState()
    const [AI,setAI]=useState(false)
    const [deleteimage,setdeleteimage]=useState([])
    const inputref=useRef(null)
    const [deleteimg,setdeleteimg]=useState(false)
    const [selectTodelete,setselectTodelete]=useState(false)
    const [deletecancel,setdeletecancel]=useState()
    const [scan,setscan] =useState(false)
    const togialRef=useRef()
    const togialDeleteRef=useRef()
    const videoref=useRef(null)
    const navigat=useNavigate()
    const userInfo=useStore(state=>state.user)
    const updatepictureZU=useStore(state=>state.updateImg)
    const updateStorage=useStore(state=>state.updateStorage)
    const deleteinfo =useStore(state=>state.logout)
    const cloud =userInfo?.userStorage||0.00
             const formatRef=useRef(new FormData());
             const socketRef=useRef(null)

    console.log(cloud)
      useEffect(()=>{
      if(!translate){
        setdeletecancel({
            del:'Delete Pictures',
            cen:'Cancel'})
    }else{
        setdeletecancel({
            del:'画像を削除',
            cen:'キャンセル'})
    }
  },[translate])


       useEffect(()=>{
      socketRef.current=io('/')
   
      
    socketRef.current.on('user data',(data)=>{
      console.log('we get the user data in the socket',data);
      if(data){
             
                  
                      setfile([])
                    formatRef.current.delete('picture')
                    togialRef.current.close()
                    inputref.current.value=''
                    settotalLoad(0)
                  

                      const images=data.allImg
               updatepictureZU(images)
              const updateStorageX=data.userStorage
        
            updateStorage(updateStorageX)
           
             setviewall(images)
      }
      
    })
    return()=>{
      socketRef.current?.disconnect()
      socketRef.current.off('connect')
    }
   },[updateStorage,updatepictureZU])
 
 
    const japanese = [
  { jp: 'クラウド' },
  { jp: 'すべての画像' },
  { jp: '画像を削除' },
  { jp: 'ファイルをアップロード' },
  { jp: '合計数' },
  { jp: '合計サイズ' },
  { jp: '注意' },
  { jp: '画像は安全なプロトコルを使用して外部サーバーに保存され、'},
  { jp:'さんのアカウントとして管理されます。'},
  { jp:'AIは検索精度の向上と、より効率的な結果を提供するために画像を解析する場合があります'},
  { jp: '追加' },
  { jp: 'すべて削除' },
  { jp: 'アップロード' },
  { jp:'削除'},
  { jp:'すべて削除'},
  { jp:'追加'},
  { jp:'アップロード'},
  { jp: 'ログアウト' },
  {jp:'最大容量：5GB'},
  { jp: '写真' },          
  { jp: 'AI 検索' },        
  { jp: '日本語' }, 
  { jp: '無料プラン' }

]


  

    async function hundelfile(){
        inputref.current.click()
         videoref.current.muted=true
       videoref.current.pause();
        videoref.current.currentTime = 0;

            
    }
    function closefunc(){
      togialRef.current.close()
      videoref.current.muted=true
       videoref.current.pause();
        videoref.current.currentTime = 0;

    }

    useEffect(()=>{
const convert=async()=>{
  const checking=file.findIndex(item=>(
    !item.type.startsWith('image')
  ))

if(checking===-1){
   try{ 

       const  options  =  { 
        maxSizeMB : 1 , 
        maxWidthOrHeight : 1920 , 
        useWebWorker : true , 
        fileType:'image/webp', 
        initialQuality: 0.8
  } 
    const  compressedFile  = await Promise.all(
        file.map(item=>{
          return imageCompression(item,options ) ; 
        })
      )
       
   for(let i=0 ;i<compressedFile.length;i++){
        formatRef.current.append('picture',compressedFile[i])

    }
    }catch(error){
            console.error('error in promise',error)

    }

  }else{
    setnotimage(true)
  }

}
    convert()
    },[file])



  
   

    //  if(!userInfo){
    //     return(<>
    //     <div className='box-of-err' >
    //         <img className='err-img' src='/2065682.jpg' />
    //     </div>
    //     </>)
    // }

   
    async function getpic(){
       if(!userInfo?.id){
       return console.log('user not loaded yet')
       }
       if(notimage===true) return
     try {
            socketRef.current?.emit('userid',userInfo.id)
console.log(formatRef.current.getAll('picture'))
          setscan(true)
           const respond= await axios.post(`/api/upload/${userInfo.id}`,formatRef.current,{
            withCredentials:true,
            onUploadProgress:(progressEvent)=>{
                const load=progressEvent.loaded
                const total=progressEvent.total
                const prox=(load*100/total).toFixed(2)
                  settotalLoad(prox)
                
            }
          
        })
       
        
         if(respond.data.message==='ai finish'){
               
         setTimeout(() => {
            setscan(false)
         }, 2000);
           
            
         }
       
           
     } catch (error) {
        console.error(error)
     }
        
        
    }
    function inputfile(e){
     setfile(pre=>[...pre,...e.target.files])
     
    }

    async function logout(){

        const respond= await axios.get(`/api/logout/${userInfo.id}`,{withCredentials:true})
        const logoutCheack=respond.data.message
        if(logoutCheack==='token delete'){ 
            navigat('/login')
            deleteinfo()
        }
        
    }
function getdialog(){
    togialRef.current.showModal()
    videoref.current.muted=false
     videoref.current.play();
             videoref.current.currentTime = 0;

}

    
const totalSize=Object.values(file)?.reduce((sum,item)=>{
    return Number((sum+item.size/ (1024*1024)).toFixed(2))
},0)

const fileVlx=Object.values(file)
const url=fileVlx.map((item)=>{
 return {url:URL.createObjectURL(item),name:item.name}

 })
 
function deletePictureFromUpload(e){
  setnotimage(false)
const currentImg=e.currentTarget.name
setfile(Object.values(file).filter(item=>( item.name!==currentImg)
))
}

function galeryOfpictures(){
    
    const images=userInfo.allImg?userInfo.allImg:[]
   
         setviewall(images)
    setgalery(!galery)
    setdeleteimg(!deleteimg)
    setselectTodelete(false)
    setdeleteimage('')
 
    
   
}

async function deletemode(){
setselectTodelete(!selectTodelete)
 setdeleteimage('');
}
function check(e){
   if(e.target.checked){
     setdeleteimage(pre=>[...pre,e.target.value])
   }
   else{
      setdeleteimage(prev =>
                prev.filter(img => img !== e.target.value)
            );
   }
}
async function deleteimageInbackend(){
    if(!userInfo.id) return
  try {
      const response = await axios.delete('/api/deleteall',{
        data:{id:userInfo.id},
        withCredentials:true})
        if(response.data.pictures_path==='' && response.data.size===0){
        const fixImgPath=[]
        const updateStorageX=0
         updatepictureZU(fixImgPath)
           setTimeout(()=>{
             setviewall(fixImgPath)
           },500)
             updateStorage(updateStorageX)
            deletemode()
            togialDeleteRef.current.close()
        }
  } catch (error) {
    console.error(error)
  }
}

async function deleteinTheback(){
    if (!deleteimage) return 
    console.log('delete',deleteimage)
   try{ const res =await axios.delete('/api/delete',{
        
        data:{id:userInfo.id,deleteimage},
        withCredentials:true})
     const images=res?.data?.picture_path
      const fix = images.map(item=>{
        return {pictures_path:item}
      })
         updatepictureZU(fix)
           setTimeout(()=>{
             setviewall(fix)
           },500)
        const updateStorageX=res?.data?.size
        
            updateStorage(updateStorageX)
            deletemode()
    }
    catch(error){
        console.error(error)
    }
    

    
}
return(<>

<motion.div
 className="dash-box"
 
 
 >
    <dialog className='dialog' ref={togialRef}>
       <div className='up-box'>
      
         <p style={{fontFamily:'inherit',paddingTop:'2%',paddingLeft:'1%'}}>{translate?japanese[3].jp:'Upload Files'}</p>
        <button
        onClick={closefunc}
        className='d-div'><img src='/close.png' /></button>
       </div>
       <div className='mid-box'> 
       {file.length===0? 
       <div><button 
        onClick={hundelfile}
        className='click-upload-button'>
          <img className='data-cloud-icon' src='data-cloud.png' />
        CLICK UPLOAD</button>
        <div className='video-up-div'>
              <video
              ref={videoref}
        className='video-up'
  src="VID.mp4"
  
  
  loop
  playsInline/>  
        </div>
    
        </div>
        
        :
        
        <div className='pictures-maping'>
            <div className='picture-info-right'>
               {url?.map((item,index)=>(
                <div key={index}>
                    <div className='small-boxes' >
                        <button
                        name={item.name}
                        onClick={deletePictureFromUpload}
                        className='delete-btn'><img className='remove-icon' src='/remove.png' /></button>
                        <img className='img-ready-to-upload' src={item.url} />
                    </div>
                </div>
               ))}
            </div>
            <div className='picture-info-left'>
               <div className='num-size'>
                 <p style={{fontSize: "clamp(8px, 2vw, 16px)",fontWeight:'700'}}>{translate?japanese[4].jp:'Total Number'} : {file.length}</p>
                <p style={{fontSize: "clamp(8px, 2vw, 16px)",fontWeight:'700'}}>{translate?japanese[5].jp:'Total Size '}: {!totalSize?'N/A':totalSize} MB</p>
               </div>
                
                <p style={{ fontSize: "clamp(8px, 2vw, 16px)" }}><span style={{color:'red',textDecoration:'underline',fontSize: "clamp(8px, 2vw, 16px)",fontWeight:'700'}}>{translate?japanese[6].jp:'Note'} : </span>
                {translate?japanese[7].jp:'Images will be stored securely on an external server using secure protocols Under '}
                    <span style={{color:'green',fontSize: "clamp(8px, 2vw, 16px)",fontWeight:'700'}}>{!userInfo.firstname?'':userInfo.firstname}{translate?japanese[8].jp:''} </span> {!translate?'name. ':''}
                     {translate?japanese[9].jp:'AI may analyze them to improve search accuracy and provide more efficient results.'}
                </p>
            </div>
        </div>
        }
       </div>
       {file.length!==0?<div className='lst-box'>
        <div className='progres-upload'>
            <Progress className='progress-upload' value={totalLoad}/>
                 <span style={{marginLeft:'7px',fontSize:'clamp(11px,1.4vw,1.6vw)'}}>{totalLoad}%</span>
               
        </div>
        <div className='upload-btn'>
         <div className='dialog-note'>
           {notimage===true?<p className='note-images'>Note: only images Type</p>:''}
         </div>
            <div className='dialog-buttons'>
              <button 
            onClick={hundelfile}
            className='btn-img-hundel'>{translate?japanese[15].jp:'ADD'}</button>
            <button
           
             onClick={getpic}
            className='btn-img-hundel'>{translate?japanese[16].jp:'UPLOAD'}</button>
            </div>
        </div>
       </div>:''}
      
    </dialog>
    
    {/* right side html */}
    
    <div className='right-side'>
                   
        <div className='user-info'>
            <img className='avatar' src='meerkat.png' />
            
            <p className="user-name">{userInfo.firstname}</p>
            <div className='plan'>{translate?japanese[22].jp:'Free Plan'}</div>
        </div>
        <div className='picture-info'>
                <p className='text'>{translate?japanese[0].jp:'Cloud Storage'}</p>
        <CircularProgress style={{display:'flex',alignItems:'center',justifyContent:'center',height:'73%',strokeLinecap:'round'}} value={(cloud*100)/5000} size="100%" 
        color={'rgb(147, 15, 165)'}
        trackColor="rgb(211, 207, 207)"
        >
        <CircularProgressLabel > 
          <p className='pro-txt'>{!cloud?'0.00':((cloud*100)/5000).toFixed(2)}%</p>
          <p className='pro-txt2'>used</p>
          </CircularProgressLabel>
            </CircularProgress>     
            <p  className='gb'><span className='mb'>{((cloud*100)/5000).toFixed(2)} MB </span>/ 5 GB</p>
        
    </div>
        <div className='still'>
           <div className='first-still'>
          <div style={{width:'38%',display:'flex',alignItems:'center',paddingLeft:'10%'}}>
            <img width='70%' src='/image-icon.png' />
          </div>
          <div className='all-pic-div'>  
             <p className={'images-word'}>{translate?japanese[1].jp:'All Pictures'}</p>
                   <CountUp
                    from={0}
                    to={userInfo.allImg.length?userInfo.allImg.length:0}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0.5}
                    /> </div>
           </div>
           <div className='therd-still'>
          <div style={{width:'38%',display:'flex',alignItems:'center',paddingLeft:'6%'}}>
              <img width='90%' src='/clouds.png' />
            </div>
           <div className='all-pic-div'>
             <div className='capacity'>{translate?<p className='images-word'>{japanese[18].jp}</p>:<p className='images-word'>Max Capacity <span className='count-up-text'>5 GB</span></p>}</div>
           </div>
            </div>
                     <div className='delete-pictures-div'>
                        {deleteimg===true && AI===false?<button 
                        onClick={deletemode}
                        className={deleteimage.length===0?'deletebtn':'cancel'}>
                          {deleteimage.length===0?<img style={{marginRight:'2%',width:'15%'}} src='/delete.png' />:''}
                          {deleteimage.length===0?deletecancel.del:deletecancel.cen}</button>:''}
                     </div>
                     
        </div>
        <div className='logout'>
            <button
            onClick={logout}
            className='logout-btn'>
             <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'30%',height:'100%'}}>
               <img className='logout-icon' src='/logout.png' />
             </div>
              <p className='log-text'>{translate?japanese[17].jp:'Log out'}</p>
              </button>
            <div className='robot-icon'>
          <img className='ai-img' src='/dots.gif' />
          <p className='powered'>Powered by AI</p>
        </div>
        </div>
        
    </div>
            {/* middel page */}
        <div className='middel-page'>
            <div className='search'>
                    {/* search buttons */}
                <div className='photo-div'>
                  <button 
                onClick={galeryOfpictures}
                className='search-btn'>
                  <img className='cloud-img' src='home-button.png' title='Galery' />
                  </button>
                  <p className='icon-information'>{translate?japanese[19].jp:'Photo'}</p>
                </div>
               <div className='photo-div'>
                 <button
                onClick={()=>setAI(!AI)}
                className='search-btn'>{scan===false?
                <img className='cloud-img' src='chip.png' title='AI Search' />:
                <img className='cloud-img' src='Scan.gif' title='AI Search' />
                }
                  </button>
                  <p className='icon-information'>{translate?japanese[20].jp:'Ai Search'}</p>
               </div>
                
                             
               <div className='photo-div'>
                  <button
                 onClick={getdialog}
                 className='search-btn'>
                  <img  className='cloud-img' src='/cloud-computing.png' title='upload images' />
                  </button>
                  <p className='icon-information'>{translate?japanese[12].jp:'Upload'}</p>
               </div>
              <div className='photo-div'>
                   <button
                 onClick={()=>settranslite(!translate)}
                 className='search-btn'>
                  <img className='cloud-img' src='/translation.png' title='JP/EN' />
                 
                 </button>
                 <p className='icon-information'>{translate?japanese[21].jp:'English'}</p>
              </div>
                 <input 
                 multiple
                 
                 onChange={inputfile}
                 ref={inputref}
                 type='file' style={{display:'none'}}
                 accept='image'
                 />
            </div>
                {AI !== true && (
  <div className='all-pic'>

    {galery === true && (
      <PhotoProvider>
        {viewall?.map((item, index) => (
          <PhotoView
            
            key={index}
            src={`/my-uploads/${item.pictures_path}`}
          >
            <div className='picture-box'>
              {selectTodelete === true && (
                <input
                onClick={(e) => e.stopPropagation()}
                  value={item.pictures_path}
                  onChange={check}
                  className='checkbox'
                  type='checkbox'
                  
                />
              )}

              <img
                onClick={() => setimageUrl(item)}
                className='image'
                src={`/my-uploads/${item.pictures_path}`}
              />
            </div>
          </PhotoView>
        ))}
      </PhotoProvider>
    )}

  </div>
)}
           
                
    
                {AI===true?
                <Aimode mode={setAI} value={AI} translate={translate} />
               :''}
                {deleteimage.length>0&&AI===false?<div className='delete-box'>
                    <button 
                         onClick={deleteinTheback}
                        className='delete-1-pic'>{translate?japanese[13].jp:'Delete'}</button>
                    <button
                    onClick={()=>togialDeleteRef.current.showModal()}
                    className='delete-all-pic'>{translate?japanese[14].jp:'Delete All'}</button>
                </div>:''}
                
             
                    
        </div>
         
</motion.div>
                         <dialog className='dialog-delete' ref={togialDeleteRef}>
                    <div className='dialog-note'>
                       <p className='delete-all-text'> {translate?'すべて削除 ?':'Delete all /'}</p>
                    </div>
                    <div className='dialog-btn' >
                        <button
                        onClick={deleteimageInbackend}
                        className='confirm-btn'>{translate?'はい':'yes'}</button>
                        <button onClick={()=>togialDeleteRef.current.close()}
                         className='confirm-btn'>{translate?'いいえ':'no'}</button>
                    </div>
                    </dialog>
                   
                   
  
  
</>)
}

export default Dashboard;



        


   
       
    

        