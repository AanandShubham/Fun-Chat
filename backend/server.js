import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.routes.js'
import messageRoute from './routes/message.routes.js'
import userRoute from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()

dotenv.config({})

const PORT = process.env.PORT || 5000



app.use(express.json());  // to parse the incoming request with JSON paylods (from json.body)
app.use(cookieParser()); // to parse the cookie from request object 
app.use('/api/auth',authRoute); // to handle the auth requests 
app.use('/api/user',userRoute); // to get all the user when logged in   
app.use('/api/message',messageRoute); // to handle the message requests

app.get('/',(req,res)=>{
    res.send("this is main page");
})
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running to port : ${PORT}`);
})