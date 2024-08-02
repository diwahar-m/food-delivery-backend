import express from "express";
import { addFood } from "../controllers/foodController.js";
// Used for image routing system
import multer from "multer"; 

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`) 
        // this method makes the filename as unique
    }
})
const upload = multer({ storage: storage})


foodRouter.post("/add",upload.single("image"), addFood)


export default foodRouter;