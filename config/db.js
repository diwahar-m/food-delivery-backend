import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-delivery-app:food-delivery-app@cluster0.j3fc3nb.mongodb.net/food-delivery-app')
    .then(()=> console.log('DB Connected'));
}