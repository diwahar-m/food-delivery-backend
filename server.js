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

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors()) // to access backend from any frontend

app.get("/",(req, res)=>{
    res.send("Api Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})
// Using Thunderclient to test the api
