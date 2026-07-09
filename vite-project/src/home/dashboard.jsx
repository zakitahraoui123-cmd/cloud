import {useEffect, useRef, useState } from 'react';
import './dashboard.css';
import {Progress} from '@chakra-ui/react';
import CountUp from '../component/CountUp'
import {  motion } from 'framer-motion';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import useStore from './zustand';
import {useNavigate } from 'react-router';
import axios from 'axios';
import Aimode from './ai';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



 function Dashboard(){
    const [file,setfile]=useState([])
    const [viewall,setviewall]=useState()
    const [galery,setgalery]=useState(false)
    const [imageUrl,setimageUrl]=useState()
    const [translate,settranslite]=useState(false)
    const [totalLoad,settotalLoad]=useState()
    const [AI,setAI]=useState(false)
    const [deleteimage,setdeleteimage]=useState([])
    const inputref=useRef(null)
    const [deleteimg,setdeleteimg]=useState(false)
    const [selectTodelete,setselectTodelete]=useState(false)
    const [deletecancel,setdeletecancel]=useState()
    const togialRef=useRef()
    const togialDeleteRef=useRef()
    const navigat=useNavigate()
    const userInfo=useStore(state=>state.user)
    const updatepictureZU=useStore(state=>state.updateImg)
    const updateStorage=useStore(state=>state.updateStorage)
    const deleteinfo =useStore(state=>state.logout)
    const cloud =userInfo?.userStorage||null
    console.log(cloud)
      useEffect(()=>{
      if(!translate){
        setdeletecancel({
            del:'Delete Pictures',
            cen:'CANCEL'})
    }else{
        setdeletecancel({
            del:'画像を削除',
            cen:'キャンセル'})
    }
  },[translate])
    if(!userInfo){
        return(<>
        <div className='box-of-err' >
            <img className='err-img' src='/2065682.jpg' />
        </div>
        </>)
    }
   
    const japanese = [
  { jp: 'クラウドストレージ' },
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
   {jp:'最大容量：5GB'}
]



    const format= new FormData();
    for(let i=0 ;i<file.length;i++){
        format.append('picture',file[i])

    }
    async function hundelfile(){
        inputref.current.click()
            

    }

  
    async function getpic(){
       if(!userInfo?.id){
       return console.log('user not loaded yet')
       }
     try {
       
           const respond= await axios.post(`/api/upload/${userInfo.id}`,format,{
            withCredentials:true,
            onUploadProgress:(progressEvent)=>{
                const load=progressEvent.loaded
                const total=progressEvent.total
                const prox=(load*100/total)
                  settotalLoad(prox)
            if(prox===100){
                setTimeout(()=>{
                    settotalLoad(0)
                    setfile([])
                    format.delete('picture')
                    togialRef.current.close()
                    inputref.current.value=''
           
                },3000)
            }
              
            }
       
        })
        const images=respond?.data?.allImg
      console.log('images get pic router',images)
         
         updatepictureZU(images)
        const updateStorageX=respond?.data?.userStorage
        
            updateStorage(updateStorageX)
           setTimeout(()=>{
             setviewall(images)
           },1000)
     } catch (error) {
        console.error(error)
     }
        
        
    }
    

    async function logout(){

        const respond= await axios.get('/api/logout',{withCredentials:true})
        const logoutCheack=respond.data.message
        if(logoutCheack==='token delete'){ 
            navigat('/login')
            deleteinfo()
        }
        
    }
function getdialog(){
    togialRef.current.showModal()
}

    
const totalSize=Object.values(file)?.reduce((sum,item)=>{
    return Number((sum+item.size/ 1024 / 1024).toFixed(2))
},0)

const fileVlx=Object.values(file)
const url=fileVlx.map((item)=>{
 return {url:URL.createObjectURL(item),name:item.name}

 })
 
function deletePictureFromUpload(e){
const currentImg=e.currentTarget.name
setfile(Object.values(file).filter(item=>( item.name!==currentImg)
))
}

function galeryOfpictures(){
    
    const images=userInfo?.allImg
   
         setviewall(images)
    setgalery(!galery)
    setdeleteimg(!deleteimg)
    setselectTodelete(!selectTodelete)
 setdeleteimage('');
    
   
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
 className={AI===false?"dash-box":"dash-box2"}
 
 
 >
    <dialog className='dialog' ref={togialRef}>
       <div className='up-box'>
      
         <p style={{fontFamily:'inherit',paddingTop:'2%',paddingLeft:'1%'}}>{translate?japanese[3].jp:'Upload Files'}</p>
        <button
        onClick={()=>togialRef.current.close()}
        className='d-div'><img src='/close.png' /></button>
       </div>
       <div className='mid-box'> 
       {file.length===0? 
       <button 
        onClick={hundelfile}
        className='click-upload-button'><img className='data-cloud-icon' src='data-cloud.png' />CLICK UPLOAD</button>:
        
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
                 <p style={{fontSize:'clamp(10px,1.4vw,1.6vw)'}}>{translate?japanese[4].jp:'Total Number'} : {file.length}</p>
                <p style={{fontSize:'clamp(10px,1.4vw,1.6vw)'}}>{translate?japanese[5].jp:'Total Size '}: {!totalSize?'N/A':totalSize} MB</p>
               </div>
                
                <p style={{fontSize:'clamp(10px,1.4vw,1.6vw)'}}><span style={{color:'red',textDecoration:'underline',fontSize:'clamp(8px,1.4vw,1.6vw)'}}>{translate?japanese[6].jp:'Note'} : </span>
                {translate?japanese[7].jp:'Images will be stored securely on an external server using secure protocols Under '}
                    <span style={{color:'green',fontSize:'clamp(8px,1.4vw,1.6vw)'}}>{userInfo.firstname}{translate?japanese[8].jp:''} </span> {!translate?'name. ':''}
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
            <button 
            onClick={hundelfile}
            className='btn-img-hundel'>{translate?japanese[15].jp:'ADD'}</button>
            <button
           
             onClick={getpic}
            className='btn-img-hundel'>{translate?japanese[16].jp:'UPLOAD'}</button>
        </div>
       </div>:''}
      
    </dialog>
    
    {/* right side html */}
    
    <div className='right-side'>
                   
        <div className='user-info'>
            <img className='avatar' src='meerkat.png' />
            
            <p className={AI===false?"user-name":"user-name2"}>{userInfo.firstname}</p>
        </div>
        <div className='picture-info'>
            <div className='progress'>
                <p className={AI===false?'text':'text2'}>{translate?japanese[0].jp:'Cloud Storage'}</p>
        <CircularProgress className='progress-icon' style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'6%'}} value={cloud/1000} size="100%" 
        color={AI===false?'rgb(138, 143, 285)':'pink'}>
        <CircularProgressLabel> <p className='pro-txt'>{!cloud?0:(cloud/1000).toFixed(2)}%</p></CircularProgressLabel>
            </CircularProgress>     
            </div>
        
    </div>
        <div className='still'>
           <div className={'first-still'}>
             <p className={'images-word'}>{translate?japanese[1].jp:'All Pictures'}</p>
                   <CountUp
                    from={0}
                    to={userInfo.allImg?userInfo.allImg.length:0}
                    separator=","
                    direction="up"
                    duration={1}
                    className={AI===false?"count-up-text":"count-up-text2"}
                    delay={0.5}
                    /> 
           </div>
           <div className='therd-still'><p className='max'>{translate?japanese[18].jp:'Max Capacity : 5 GB'}</p></div>
                     <div className='delete-pictures-div'>
                        {deleteimg===true && AI===false?<button 
                        onClick={deletemode}
                        className='deletebtn'>{deleteimage.length===0?deletecancel.del:deletecancel.cen}</button>:''}
                     </div>
                     
        </div>
        <div className='logout'>
            <button
            onClick={logout}
            className='logout-btn'><p className='log-text'>{translate?japanese[17].jp:'logout'}</p></button>
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
                <button 
                onClick={galeryOfpictures}
                className='search-btn'><img className='cloud-img' src='home-button.png' title='Galery' /></button>
                <button
                onClick={()=>setAI(!AI)}
                className='search-btn'><img className={AI===false?'cloud-img':'ai-mode'} src='chip.png' title='AI Search' /></button>
                
                             
                 <button
                 onClick={getdialog}
                 className='search-btn'><img  className='cloud-img' src='/cloud-computing.png' title='upload images' /></button>
                 <button
                 onClick={()=>settranslite(!translate)}
                 className='search-btn'><img className='cloud-img' src='/translation.png' title='JP/EN' />
                 
                 </button>
                 <input 
                 multiple
                 
                 onChange={(e)=>setfile(pre=>[...pre,...e.target.files])}
                 ref={inputref}
                 type='file' style={{display:'none'}} />
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
                alt='Image'
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



        


   
       
    

        