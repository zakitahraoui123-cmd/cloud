import express, { json } from "express";
import cors from"cors"
import pool from "./postgress.js";
import registerRoute from "./registerrouter.js";
import cookieParser from "cookie-parser";
import auth from "./tokenCheck.js";
import logoutRouter from "./logoutRouter.js";
import loginRouter from "./login.js";
import uploadRouter from "./uploads.js";
import userQuastions from "./quation.js";
import deleteRouter from "./delete.js";
import deleteAllRouter from "./deleteAllRouter.js";
import sendEmail from "./checkOtpRouter.js";
import recoverRouter from "./recovery.js";
import updatepasswordRoute from "./updatePasswordRouter.js";
import newPasswordRouter from "./newPassword.js";
import { Server } from "socket.io";
import http from "http";
import { userInfo } from "os";

const app =express();
const port =4000;
app.use(cors({
    origin:true,
    credentials:true
}))
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
         origin:true,
         credentials:true
    }
})
app.set('io',io)
io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('userid',(userid)=>{
        console.log(userid)
        socket.join(`userid:${userid}`)
    })

})
app.use('/my-uploads',express.static('my-uploads'))
app.use(json())
app.use(cookieParser())
app.use('/api',registerRoute)
app.use('/api',logoutRouter)
app.use('/api',loginRouter)
app.use('/api',uploadRouter)
app.use('/api',userQuastions)
app.use('/api',deleteRouter)
app.use('/api',deleteAllRouter)
app.use('/api',sendEmail)
app.use('/api',recoverRouter)
app.use('/api',updatepasswordRoute)
app.use('/api',newPasswordRouter)
async function start (){
try {
    const res= await pool.query("SELECT NOW()")
    console.log('here near to start server')
    server.listen(port,()=>{
    console.log('app is runing on port 4000 and pg is connected')
})
} catch (error) {
    console.error(error)
}
}

start()