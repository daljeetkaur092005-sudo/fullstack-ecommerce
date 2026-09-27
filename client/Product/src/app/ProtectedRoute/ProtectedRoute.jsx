import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../../Features/Auth/State/useContext'

const ProtectedRoute = () => {
    const {user,loading}=useContext(MyStore)
    if (loading) {
    return <h1>Loading...</h1>;
  }
    if(!user){
        return <Navigate to="/"/>
    }
  return <Outlet/>
  
}

export default ProtectedRoute