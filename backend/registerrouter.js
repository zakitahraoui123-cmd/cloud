import express from "express"
import pool from "./postgress.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotev from "dotenv";
import client from "./redis.js";


dotev.config()

const registerRoute=express.Router()

registerRoute.post('/register',async(req,res)=>{
    const userinfo=req.body.userZu
    console.log(userinfo.email)
    const code=req.body.code
             const redis = await client.get(`email:${userinfo.email}`)
            if(Number(redis)!==Number(code)){
                console.log(redis)
                console.log(code)
                return res.status(401).send('code is wronge')
            }
        try {
          
        const hashing= await bcrypt.hash(userinfo.password,10)
            
    
        const registerInfo=await pool.query('INSERT INTO user_info(name,last_name,phone,password,email) values ($1,$2,$3,$4,$5) RETURNING id , last_name ,name',[userinfo.firstname,userinfo.lastname,userinfo.phone,hashing,userinfo.email])
        const id =registerInfo.rows[0].id
        const clouding = await pool.query('INSERT INTO cloud_storage (user_cloud_id,storage) VALUES ($1,$2)',[id,0])
        const firstname=registerInfo.rows[0].name
        const lastName=registerInfo.rows[0].last_name
      
        const token = jwt.sign({id:id},process.env.SECRET_KEY,{expiresIn:'24H'})
        res.cookie('token',token,{
            sameSite:"strict",
            httpOnly:true,
            maxAge:24*60*60*1000
        })
    return res.status(200).json({firstname,lastName,id})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }


})




export default registerRoute;
























