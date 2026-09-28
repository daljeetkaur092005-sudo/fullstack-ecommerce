import express from "express"
import { currentUserController, loginController, logoutController, refreshController, registerController } from "../controller/auth.controller.js"
import { authenticate } from "../middleware/auth.middleware.js"
import { loginValidator, registerValidator } from "../validator/auth.validator.js"
const router=express.Router()
router.post("/register",registerValidator ,registerController)
router.post("/login",loginValidator,loginController)
router.get("/me",authenticate,currentUserController)
router.get("/refresh",refreshController)
router.get("/refresh",refreshController)
router.post("/logout", logoutController)
export default router


