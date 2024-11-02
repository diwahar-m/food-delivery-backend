// mongoose - to connect with database
// jsonwebtoken - authentication
// bcrypt - to encrypt user's data
// cors - permission to frontend to read the backend
// dotenv - environment variable in our project
// body-parser - to parse data coming from user
// multer - to store image in backend
// stripe - payment gateways on webpage
// validator - to check whether password or email id is valid or not
// nodemon - to restart the server when we save changes
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config" // used to get .env variables
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors()) // to access backend from any frontend


// db connection 
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
// Routes
app.get("/",(req, res)=>{
    res.send("Api Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://food-delivery-app:<password>@cluster0.j3fc3nb.mongodb.net/?
// Using Thunderclient to test the api
