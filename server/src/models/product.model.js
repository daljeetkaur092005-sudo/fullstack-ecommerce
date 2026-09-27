import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:6,
        maxLength:100 
    },
    description:{
        type:String,
        required:true,
        minLength:10,
        maxLength:500
    },
    images:{
        type:[{
            type:String
        }],
        validation:{
            validator:images=>images.length<=5,
            message:"images length less than 5"
        }
    },

   price:{
        amount:{
            type:Number,
            required:true,
            min:0

        },

        currency:{
            type:String,
            enum:["INR","USD"],
            default:"INR",
            required:true,

        }
   },
 sizes:[{
         size:{
        type:String,
        enum:["S","XS","L","XL","XXL"],
        required:true
        
    },
    stock:{
        type:Number,
        min:0,
        default:0
    }
    }],
    seller:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true

    }

    

    

})


const productModel=mongoose.model("products",productSchema)
export default productModel;