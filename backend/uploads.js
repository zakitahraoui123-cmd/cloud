import express from "express";
import upload from "./multer.js";
import pool from "./postgress.js";
import auth from "./tokenCheck.js";
import {RawImage} from '@huggingface/transformers';
import { processer,ImageModle } from "./aiVictor.js";
import pc from './pincoin.js'
const uploadRouter=express.Router();

uploadRouter.post('/upload/:id',auth,upload.array('picture',20),async(req,res)=>{
const nameOfspaceID=req.params.id
console.log('name of space',nameOfspaceID)
console.log('name of space type',typeof(nameOfspaceID))
if(!nameOfspaceID) return
const userId=Number(req.params.id)

const file =req.files

if(!file || !nameOfspaceID) return res.status(400).json({message:'no enought information'})
console.log('file',file)
const allPath= await file.map(item=>item.path)
const rawImgese =await Promise.all(allPath.map(async(item)=>{
    const convertImg = await RawImage.read(item)

    return {path:item,convertImg:convertImg}
}))
try {
    const imagesProcess = await Promise.all(
    rawImgese.map(async(item)=>{
        const pro = await processer(item.convertImg)
        return {path:item.path,pro:pro}
    })
)

const victoringImages = await Promise.all(
    imagesProcess.map(async(item)=>{
        const imgvic=item.pro
        const tensor = await ImageModle(imgvic)
        return {path:item.path,tensor:Array.from(tensor.image_embeds.ort_tensor.cpuData)}
    })
    
)


    const index = await pc.index(process.env.INDEXNAME)
 const records= await Promise.all(victoringImages.map(item=>(
    
            {
            id:item.path.slice(11),
            values: item.tensor,
            metadata:{
                path: item.path
            }
})
    ))
if(records){
       await index.namespace(nameOfspaceID).upsert({records})

}
} catch (error) {
    console.error(error)
    return res.status(500).json({message:error})
}
let allStorage=0
for(let i=0;i<file.length;i++){
    let single=file[i]
    const path =single.path.slice(11)
    const size =Number(single.size/ 1024*1024)
    allStorage=size+allStorage

    const insertdata= await pool.query('INSERT INTO user_data (user_info_id,pictures_path,picture_size) VALUES ($1,$2,$3)',[userId,path,size])

}
console.log('all storage',allStorage)

try {
    
    const capacity=await pool.query('UPDATE cloud_storage SET storage= storage + $1 WHERE user_cloud_id=$2 RETURNING storage',[allStorage,userId])
    
    const allPictures= await pool.query('SELECT pictures_path FROM user_data WHERE user_info_id=$1',[userId])
    const userStorage=capacity?.rows[0]?.storage
    if(userStorage===undefined ||null){
        userStorage===0
    }
    const allImg=allPictures.rows
    
    return res.status(200).json({userStorage,allImg})

} catch (error) {
    console.error(error)
}
   

})



export default uploadRouter;