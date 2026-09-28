import { body, validationResult } from "express-validator";
export const registerValidator = [
  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .trim()
    .isEmail()
    .withMessage("enter vaild email"),
  body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be a string")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("name must be min between 2 to 50 character"),
  body("password")
    .exists()
    .withMessage("password is required")
    .bail()
    .isString()
    .withMessage("password must be string")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password must be 6 character"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid request",
        errors: errors.array(),
      });
    }
    next();
  },
];

export const loginValidator = [
  body("email")
    .exists()
    .withMessage("user email is required")
    .trim()
    .isEmail()
    .withMessage("enter valid email")
    .bail(),
  body("password")
    .exists()
    .withMessage("password is required")
    .isString()
    .withMessage("invalid password")
    .trim()
    .isLength({ min: 6, max: 100 })
    .withMessage("password must be between 6 to 100"),
    (req,res,next)=>{
      const errors=validationResult(req)
      if(!errors.isEmpty()){
    return res.status(400).json({
        message: "Invalid request",
        errors: errors.array(),
      })
      }
    next()
    }
];
