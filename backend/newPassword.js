import express from "express"
import pool from "./postgress.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotev from "dotenv";
import client from "./redis.js";


dotev.config()

const newPasswordRouter=express.Router()

newPasswordRouter.post('/newpassword/:password/:email',async(req,res)=>{
    const email=req.params.email
    const password=req.params.password
    console.log(password)
    console.log(email)
    if (!email || !password) return
    
 
        try {
          const updateInfo=await pool.query('SELECT email FROM user_info WHERE email = $1',[email])
          const dbCheck =updateInfo.rows[0].email
        if(!dbCheck){
            return res.status(200).send('this email not exist')
        }
        const hashing= await bcrypt.hash(password,10)
            
    
        const updateModPass = await pool.query('UPDATE user_info SET password = $1 WHERE email = $2',[hashing,email])
    
    return res.status(200).json({message:'login'})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }


})




export default newPasswordRouter;
























