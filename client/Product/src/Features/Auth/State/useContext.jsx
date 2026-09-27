import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const MyStore=createContext()

export const MyContextProvider=({children})=>{
    const [user,setUser]=useState()
    const [loading,setLoading]=useState()
         const [productData, setProductData] = useState();
         console.log("pro",productData)
const [accessToken,setAccessToken]=useState(localStorage.getItem("accessToken"))
const getMe=async(token)=>{
    console.log("i am running")
   try{
      let res=await axios.get("/api/auth/me",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
                    console.log("ee",res.data)
            setUser(res.data.data.user)
    
   }
   catch(error){
        setUser(null)
    
   }

}
useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      getMe(token);
    } else {
      setLoading(false);
    }
  }, []);

    return (<MyStore.Provider value={{user,setUser,setAccessToken,getMe,loading,productData,setProductData}}>{children}</MyStore.Provider>)
}
