import  { ImageKit } from "@imagekit/nodejs"
import config from "../src/config/config.js"
const client=new ImageKit({
    privateKey:config.PRIVATE_KEY
})


export const uploadFile=async({buffer,fileName})=>{
    const response=await client.files.upload({
        file:await toFile(buffer),
        fileName:fileName,
        folder:"products"
    })
    return response

}

