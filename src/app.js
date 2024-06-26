import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//app.use() for middlewares and configs

// CORS USAGE

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// CONFIG setup using app.js

app.use(express.json({limit: "18Kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import

import userRouter from './routes/user.routes.js';
import tweetRouter from "./routes/tweet.routes.js";
import videoRouter from "./routes/video.routes.js"; // 3-4-24 (apr)


//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/users",tweetRouter)
app.use("/api/v1/users",videoRouter)

// https://localhost:8000/api/v1/users/register => example

export { app } 