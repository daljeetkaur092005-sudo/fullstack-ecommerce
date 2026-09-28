import express from "express";
import cors from "cors";
import authRoute from "../routes/auth.route.js"
import cookieparser from "cookie-parser"
import productRoute from "../routes/product.route.js"
const app=express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
export default app;