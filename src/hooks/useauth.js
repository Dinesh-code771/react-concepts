import React, { useEffect } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      //validate the token
      const decodedToken = jwtDecode(token);

      if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      } else {
        setIsAuthenticated(true);
      }

      if (decodedToken.role === "admin") {
        setIsAuthorized(true);
      }
    }
  }, []);

  return { isAuthenticated, isAuthorized };
}
