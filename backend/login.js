import express from "express";
import dotenv from 'dotenv';
import pool from "./postgress.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config()
const loginRouter=express.Router();
loginRouter.post('/login',async(req,res)=>{
if(!req.body) return
const {email}=req.body
const {password}=req.body
try {
    const searchDb=await pool.query('SELECT email,name,id ,password FROM user_info WHERE email=$1',[email])
if(searchDb.rows.length===0){
return res.status(200).json({message:'nothing'})
}
console.log(searchDb.rows)
const hashPassword=searchDb.rows[0].password
const emailDb=searchDb.rows[0].email
const idDb = searchDb.rows[0].id
const name =searchDb.rows[0].name
const cheack= await bcrypt.compare(password,hashPassword)
if(cheack ===true){
    const userdata=await pool.query('SELECT storage FROM cloud_storage WHERE user_cloud_id=$1',[idDb])
        const allPictures= await pool.query('SELECT pictures_path FROM user_data WHERE user_info_id=$1',[idDb])
        const allImg=allPictures.rows
        
       const userStorage=userdata?.rows[0].storage
    console.log('here the storage check in the login router',userStorage)
    const token = jwt.sign({id:idDb},process.env.SECRET_KEY)
    res.cookie('token',token,{
        httpOnly:true,
        sameSite:'strict',
        maxAge:24*60*60*1000
    })
    return res.status(200).json({firstname:name,id:idDb,userStorage,allImg})
}

} catch (error) {
    console.log(error)
    return res.status(500).json({message:error})
}



})

export default loginRouter;