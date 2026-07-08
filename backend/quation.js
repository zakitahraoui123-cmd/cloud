import express from 'express';
import dotenv from 'dotenv';
import auth from './tokenCheck.js';
import {token,textModel} from './aiVictor.js';
import pc from './pincoin.js';
import client from './redis.js';

dotenv.config();

const userQuastions=express.Router();

userQuastions.post('/quastion/:id',auth,async(req,res)=>{
    
   const {id}=req.params
   
   const {message}=req.body
   const mgx = message.user
   if (! id ||!mgx) return res.status(400).json({message:'invalid input the msg or id not found'})
  
        try {
            
        const tokenIzer = await token(mgx,{
            truncation:true,
            padding:true,
            return_tensor:true
        })
        const useModel= await textModel(tokenIzer)
        const victore= Array.from(useModel.text_embeds.ort_tensor.cpuData)
       
        const redis = JSON.parse(await client.get(`${id}:${victore}`))
       
        if(redis!==null &&redis.length>=1){
            return res.status(200).json(redis)
        }
        const index= pc.index(process.env.INDEXNAME)
        const query = await index.namespace(id).query({
            vector:victore,
            topK:3,
            includeMetadata:true,
            includeValues:false
        })
        console.log('query',query)
        if(!query) return res.status(203).json({message:'no match picture'})
        const result =await Promise.all(
            query.matches.map(item=>{
                return item.metadata
            })
        )
        console.log(result)
            await client.set(`${id}:${victore}`,JSON.stringify(result),{
                PX:10000
            })
        return res.status(200).json(result)
        } catch (error) {
            console.log('in the text',error)
        }
    

})



export default userQuastions;