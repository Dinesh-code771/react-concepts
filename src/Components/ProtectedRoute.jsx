import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/dinesh" />;
  }
  return element;
}
