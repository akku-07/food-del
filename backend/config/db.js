import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://aakrutikalia:AkkuSara1922@cluster0.rch3k4q.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}