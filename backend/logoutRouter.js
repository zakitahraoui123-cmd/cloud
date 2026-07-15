import express from "express";

const logoutRouter=express.Router()
logoutRouter.get('/logout/:id',async(req,res)=>{
    
    const id =req.params.id
    const io = req.app.get('io')
 
    const sockets = await io.in(`userid:${Number(id)}`).fetchSockets();
   for (let i=0; i<sockets.length ; i++){
    let socket =sockets[i]
    socket.disconnect(true) 
   }
    res.clearCookie('token')
    try {
        return res.status(200).json({message:'token delete'})
    } catch (error) {
        return res.status(500).json({message:error})
    }
})

export default logoutRouter;