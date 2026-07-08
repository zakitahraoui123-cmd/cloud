import express from "express";

const logoutRouter=express.Router()
logoutRouter.get('/logout',(req,res)=>{
    res.clearCookie('token')
    try {
        return res.status(200).json({message:'token delete'})
    } catch (error) {
        return res.status(500).json({message:error})
    }
})

export default logoutRouter;