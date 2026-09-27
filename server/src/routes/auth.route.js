import express from "express"
import { currentUserController, loginController, logoutController, refreshController, registerController } from "../controller/auth.controller.js"
import { authenticate } from "../middleware/auth.middleware.js"
const router=express.Router()
router.post("/register",registerController)
router.post("/login",loginController)
router.get("/me",authenticate,currentUserController)
router.get("/refresh",refreshController)
router.get("/refresh",refreshController)
router.post("/logout", logoutController)
export default router


