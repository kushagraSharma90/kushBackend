import express from'express'
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//middelwares
app.use(express.json({limit:"10kb"}))//middleware for json data
app.use(express.urlencoded({extended:true , limit:"10kb"}))//middleware for url data
app.use(express.static("public"))//to keep images or pdfs in local
app.use(cookieParser())

export { app }