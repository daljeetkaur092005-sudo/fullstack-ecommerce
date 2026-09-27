import express from "express";
import authRoute from "../routes/auth.route.js"
import cookieparser from "cookie-parser"
import productRoute from "../routes/product.route.js"
const app=express()
app.use(express.json())
app.use(cookieparser())
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
export default app;