import mongoose from "mongoose"
import config from "./config.js"
const connectDb=async()=>{
    try{ 
        await mongoose.connect(config.MONGO_URI)
        console.log("mongoose is connected")
         

    }
    catch(error){
           console.log("mongoose error",error)
    }
}
export default connectDb