import dotenv from "dotenv"
dotenv.config()
const config={
    MONGO_URI:process.env.MONGO_URI,
    REFRESH_TOKEN_URI:process.env.REFRESH_TOKEN_URI,
    ACCESS_TOKEN_URI:process.env.ACCESS_TOKEN_URI,
    PRIVATE_KEY:process.env.PRIVATE_KEY
}
export default config