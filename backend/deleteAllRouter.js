import express, { json } from 'express';
import auth from './tokenCheck.js';
import dotenv from 'dotenv';
import pool from './postgress.js';
import fs from 'fs/promises'
import pc from './pincoin.js';

dotenv.config()
const deleteAllRouter= express.Router()

deleteAllRouter.delete('/deleteall',auth,async(req,res)=>{
    const {id}=req.body
    if (!id) return res.status(202),json({message:'permistion denied'})
        try {
           const checkPictures= await pool.query('SELECT * FROM user_data WHERE user_info_id=$1',[id])
        
            const result = checkPictures.rows
            console.log(result.length)
            if(result.length===0){
                return res.status(202).json({message:'no pictuers in the database'})
            }
            const resultPath = await result.map(item=>(
                item.pictures_path
            ))
            await Promise.all(
                resultPath.map(item=>(
                    fs.unlink(`/my-app/my-uploads/${item}`)
                ))
            )
        const index =pc.index(process.env.INDEXNAME) 
        await index.deleteNamespace(id)
        const deleteinDB = await pool.query('DELETE FROM user_data WHERE user_info_id =$1',[id])
        const updatecloud= await pool.query('UPDATE cloud_storage SET storage =$1 WHERE user_cloud_id =$2',[0,id])
        return res.status(200).json({pictures_path:'',size:0}) 
        } catch (error) {
            console.error(error)
            return res.status(200).json({message:error})
        }

})


export default deleteAllRouter;