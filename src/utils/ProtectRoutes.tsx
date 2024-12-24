import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectRoutes = () => {
  const [loggedUser,setLoggedUser] = useState();
  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/personal/profile",{
      headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
      }
    }).then(res => setLoggedUser(res.data.email))
  })
  return loggedUser ? <Outlet /> : <Navigate to={"/login"} />;
};
export default ProtectRoutes;
