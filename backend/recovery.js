import express from "express";
import recoverPassword from "./recoverPassword.js";

const recoverRouter=express.Router()

recoverRouter.post('/recover/:email',async(req,res)=>{
const email=req.params.email
const otp = await recoverPassword(email)
if (otp==='we send the otp'){
    return res.status(200).json({message:otp})
}
else{
    return res.status(500).json({message:'somthing went wronge recovery.js'})
}
})

export default recoverRouter;