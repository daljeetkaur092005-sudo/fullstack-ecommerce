import { verifyAccessToken } from "../utils/auth.utils.js"

export const authenticate=async(req,res,next)=>{
    const accessToken=req.headers.authorization?.split(" ")[ 1 ]
    try{
            
                 const decoded=verifyAccessToken(accessToken)
                              req.user=decoded
                              next()
    }
    catch{
                return res.status(401).json({
                     message:"unauthorized"
                })
    }
}

export const authenticateSeller=()=>{
    if(req.user.role!="seller"){
        return res.status(403).json({
         messsgae:"user is not authorized to perform this action"
        })
    }
}