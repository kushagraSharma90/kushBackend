import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import connectDB from "./db/index.js";
import { log } from "console";

const app = express();

connectDB().then(()=>{
    app.listen(process.env.PORT|| 8000 , ()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!", err);
    
})