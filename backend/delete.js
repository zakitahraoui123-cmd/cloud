import express from 'express';
import auth from './tokenCheck.js';
import pool from './postgress.js';
import pc from './pincoin.js';
import dotenv from 'dotenv'
import fs from 'fs/promises'

dotenv.config()

const deleteRouter= express.Router()
deleteRouter.delete('/delete',auth,async(req,res)=>{
    
    const deleteimge=req.body.deleteimage
    
    const idDB =req.body.id
    const id =JSON.stringify(req.body.id)
        if(!deleteimge) return res.status(204).json({message:'no image'})
try {
   
console.log('path',deleteimge)
        console.log('id',idDB)
await Promise.all( 
    
    deleteimge.map(item=>(
        
  pool.query(
  'DELETE FROM user_data WHERE pictures_path = $1 AND user_info_id = $2',
  [item,idDB]
    ))
  
))

const cloud = await pool.query('SELECT * FROM user_data WHERE user_info_id =$1',[idDB])

const newcloud = cloud.rows
const theRestImage = newcloud.map(item=>{
    return item.pictures_path
})
console.log('here here',theRestImage)
const theRestSize=newcloud.map(item=>{
    return Number(item.picture_size)
}).reduce((cur,sum)=>{
    return cur+sum
},0)
const fixSize = theRestSize.toFixed(2)
const updateStorage = await pool.query('UPDATE cloud_storage SET storage = $1 WHERE user_cloud_id=$2',[fixSize,idDB])
const index = pc.index(process.env.INDEXNAME)
const ns = index.namespace(id)

    await ns.deleteMany({ids:deleteimge})
    await Promise.all(
        deleteimge.map(item=>(
            fs.unlink(`/my-app/my-uploads/${item}`)
        ))
    ) 
    return await res.status(200).json({picture_path:theRestImage,size:fixSize})
} catch (error) {
    console.log(error)
    return res.status(500).json({message:error})
}
})
export default deleteRouter;