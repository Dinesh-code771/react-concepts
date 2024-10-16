import React, { useEffect } from "react";
import { useState } from "react";
export default function useauth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    }
  }, []);

  return isAuthenticated;
}
