import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://sachirao10:romilda+10@cluster0.7dpdqh5.mongodb.net/PROJECT').then(()=>console.log("db connected"));
}