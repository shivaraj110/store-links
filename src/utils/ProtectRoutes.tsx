import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../config/url";

const ProtectedRoutes = () => {
  const [loggedUser, setLoggedUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoggedUser("");
          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          backendUrl + "/api/v1/personal/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const email = response.data.user.email || "";
        setLoggedUser(email);
      } catch (error) {
        setLoggedUser("");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) return null;

  return loggedUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
