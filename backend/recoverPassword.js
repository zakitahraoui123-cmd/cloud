import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
import client from "./redis.js";
dotenv.config();

async function recoverPassword(email){
    
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
  to: email,
  subject: "Password Reset Request",
  html: `
    <h2>Password Reset</h2>
    <p>We received a request to reset your password.</p>
    <p>Your password reset code is:</p>
    <h1 style="letter-spacing:8px;">${otp}</h1>
    <p>This code will expire in 10 minutes.</p>
    <p>If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.</p>
    <br>
    <p>Best regards,<br><strong>Cloud AI Team</strong></p>
  `,
});
    await client.set(`password-recover:${email}`,otp,{
      EX:600
    })
    return ('we send the otp')
    
  } catch (error) {
    console.error(error)
    return []
   
  }
}

export default recoverPassword;