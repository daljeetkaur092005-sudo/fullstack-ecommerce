import express from "express"
import { productValidator } from "../validator/product.validator.js";
import { authenticate, authenticateSeller } from "../middleware/auth.middleware.js";
import { createProduct, deleteController, updateConroller} from "../controller/product.controller.js";
import multer from "multer"

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        files:5,
        fileSize:5*1024*1024
    }
})


const router=express()
router.post("/",authenticate,authenticateSeller,upload.array("images"),

(req,res,next)=>{
    req.body?.price && (req.body.price=JSON.parse(req.body.price))
    req.body?.sizes && (req.body.sizes=JSON.parse(req.body.sizes))
    next()
},

productValidator,createProduct)

router.delete("/:id",deleteController)
router.put("/:id",updateConroller)









export default router;