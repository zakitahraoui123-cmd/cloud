import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
import express from "express";
import client from "./redis.js";
dotenv.config();
const sendEmail=express.Router()
sendEmail.post('/sendOtp',async(req,res)=>{
    const {email}=req.body
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SECRET_NODEMAILER_APPPASSWORD,
      },
    });

    const otp = crypto.randomInt(100000, 1000000);
 
    await transporter.sendMail({
      from: "Cloud AI Team <cloudaistoragejp@gmail.com>",
      to: `${email}`, // Replace with req.body.email
      subject: "Verify Your Email",
      html: `
        <h2>Email Verification</h2>
        <p>Your verification code is:</p>
        <h1 style="letter-spacing:8px;">${otp}</h1>
        <p>This code expires in 10 minutes.</p>
      `,
    });
    await client.set(`email:${email}`,otp,{
      EX:600
    })
    return res.status(200).send('we send the otp')
    
  } catch (error) {
    return res.status(500).json({error})
   
  }
})

export default sendEmail;