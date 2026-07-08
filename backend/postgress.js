import pg, { Client } from 'pg';
import dotenv from 'dotenv'
// open pool cnx to the postgress database
dotenv.config()

const {Pool}=pg


    const pool=new Pool({
    host:process.env.HOST,
    database: process.env.DB,
    password:process.env.PASSWORD,
    user:process.env.USER,
    port:process.env.PORT
})

export default pool;

