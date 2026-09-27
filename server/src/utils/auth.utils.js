import config from "../config/config.js"
import jwt from "jsonwebToken"
export const generateToken=({userId,role})=>{
    const refreshToken=jwt.sign({userId,role},config.REFRESH_TOKEN_URI,{expiresIn:"7d"})
    const accessToken=jwt.sign({userId,role},config.ACCESS_TOKEN_URI,{expiresIn:"15min"})
    return {refreshToken,accessToken}
}
export const verifyRefreshToken=(token)=>{
    const decoded=jwt.verify(token,config.REFRESH_TOKEN_URI)
    return decoded
}
export const verifyAccessToken=(token)=>{
    const decoded=jwt.verify(token,config.ACCESS_TOKEN_URI)
    return decoded
}
