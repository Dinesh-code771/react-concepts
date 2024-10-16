import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ element }) {
  const { isAuthenticated } = useauth();
  if (!isAuthenticated) {
    return <Navigate to="/dinesh" />;
  }
  return element;
}
