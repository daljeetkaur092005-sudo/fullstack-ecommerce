import {body,validationResult} from "express-validator"

export const productValidator=[
    body("title").exists()
    .withMessage("title must be required").bail()
    .isString()
    .withMessage("title must be string").bail()
    .trim()
    .isLength({min:10,max:200})
    .withMessage("title must be between 6 to 100 characters"),
    body("description").exists().withMessage("description is required").bail().trim().isLength({min:10,max:500}).withMessage("description must be between 10 to 500 characters"),
    body("price.amount").exists().withMessage("amount is required").bail().
    isFloat({min:0}).withMessage("amount be in number").trim(),
     body("price.currency").exists().withMessage("amount is required").bail().
    isString().withMessage("currency be in string").trim().isIn(["INR","USD"]).withMessage("either INR or USD"),
            body("sizes").exists().withMessage("sizes are required").bail().isArray().withMessage("sizes must be an array of object"),
    body("sizes.*.size").exists().withMessage("size must be present in array of sizes").bail().isString().withMessage("sizes must be in string").bail().trim().isIn(["S","XS","L","XL","XXL"]).withMessage("size can be one of this S,XS,L,XL,XXL "),
    body("sizes.*.stock").exists().withMessage("stock must be in array of sizes").bail().
    isInt({min:0}).withMessage("stock must be a integer value"),
    (req,res,next)=>{
           const errors=validationResult(req)
           if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                errors:errors.array()

            })

           }
       next()
    }
]

