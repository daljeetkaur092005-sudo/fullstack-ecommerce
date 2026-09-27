import { uploadFile } from "../../services/services.js";
import productModel from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const filesUrls = [];
  for (i = 0; i < req.files.length; i++) {
    const response = await uploadFile({
      buffer: req.files[i].buffer,
      fileName: req.files[i].fileName,
    });

    filesUrls.push(response.url);
  }


  const product = await productModel.create({
    title: req.body.title,
    description: req.body.description,
    price: { amount: req.body.price.amount, currency: req.body.price.currency },
    sizes: req.body.sizes,
    images: filesUrls,
    seller: req.user.userId,
  });

  return res.status(200).json({
    message: "product created successfully",
    data: {
      product,
    },
  });
};




export const deleteController=async(req,res)=>{
     const product=await productModel.findByIdAndDelete(req.params.id)
     if(!product){
      return res.status(404).json({
        message:"product not found"
      })
     }
     return res.status(200).json({
      message:"product deleted successfully"
     })
}



export const updateConroller=async(req,res)=>{
  const product=await productModel.findByIdAndUpdate(
    req.params.id,
  req.body,
{new:true})
  if(!product){
    return res.status(404).json({
      message:"product not found"
    })
  
  }
  return res.status(200).json({
    message:"product updated successfully",
    data:{
      product
    }
  })

}






















const listAllProducts = async (req, res) => {
  const products = await productModel.find({ published: true });
  if (!products) {
    return res.status(403).json({
      message: "product not found",
    });
  }
  return res.status(200).json({
    message: "product get successfully",
    data: {
      products,
    },
  });
};























const listAllProductsToSeller = async (req, res) => {
  const products = await productModel.find({});

  return res.status(201).json({
    message: "product get successfully",
    data: {
      products,
    },
  });
};

const unListProducts=async(req,res)=>{
    const {id}=req.params
    const product=await productModel.findById(id)
    if(!product){
        return res.status(404).json({
            message:"product not found"
        })
    }
      await productModel.findByIdAndUpdate(id,{
        published:false
      })
      return res.status(200).json({
        messgae:"product unpublished successfully"
      })

}


const listProduct=async(req,res)=>{
    const {id}=req.params
    const product=await productModel.findById(id)
    if(!product){
        return res.status(404).json({
            message:"product not found"
        })
    }
   await productModel.findByIdAndUpdate(id,{
    published:true
   })
   return res.status(200).json({
    message:"user published successfully"
   })

}








