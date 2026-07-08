import jwt from "jsonwebtoken";
import dotev from "dotenv";

dotev.config()
function auth(req,res,next){
    const token =req.cookies.token
    console.log('token',token)
    if(!token) return res.status(404).json({message:'no token was found'})
        try {
            const decode =jwt.verify(token,process.env.SECRET_KEY)
            console.log(decode)
            next()

        } catch (error) {
            return res.status(500).json(error)
        }
}

export default auth;