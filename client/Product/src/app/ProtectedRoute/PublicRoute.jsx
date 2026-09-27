import React, { useContext } from 'react'
import { Outlet, Navigate,} from 'react-router'
import { MyStore } from '../../Features/Auth/State/useContext'

const PublicRoute = () => {
    const {user,loading}=useContext(MyStore)

  if (loading) {
    return <h1>Loading...</h1>;
  }
    if(user){
        return <Navigate to="/main"/>

    }
  return <Outlet/>
  
}

export default PublicRoute
