import express  from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import spsGameRoute from './routes/spsGame.routes.js'
import userRoute from './routes/user.routes.js'

//route declaration
app.use(/api/v1/spsgame,spsGameRoute);
app.use(/api/v1/user,userRoute)


export {app}