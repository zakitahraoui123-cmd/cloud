import express from "express"
import pool from "./postgress.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotev from "dotenv";
import client from "./redis.js";


dotev.config()

const updatepasswordRoute=express.Router()

updatepasswordRoute.post('/updatepassword',async(req,res)=>{
    const email=req.body.email
    const code=req.body.code
    console.log(code)
    console.log(email)

    const redis = await client.get(`password-recover:${email}`)
            if(Number(redis)!==Number(code) || redis===[]){
                console.log(redis)
                console.log(code)
                return res.status(401).send('code is wronge')
            }
   return res.status(200).json({message:'the code is correct',email:email,code:code})


});




export default updatepasswordRoute;






















