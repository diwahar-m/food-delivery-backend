import userModel from "../models/userModel"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user
const loginUser = async(req, res) => {

}

// register user 
const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try{
        // checking is user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: "User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
             return res.json({success: false, message: "Please enter a valid email"})
        }
    } catch(error){

    }
}

export {loginUser, registerUser}