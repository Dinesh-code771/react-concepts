import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Suspense } from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Settings from "./Components/Settings";
import ErrorComponent from "./Components/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./Components/Posts";
import loader from "./utils/loader";
import List from "./Components/List";
import Otp from "./Components/Otp";
import AdminForm from "./Components/AdminForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import FormikForm from "./Components/FormikForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Container from "./Components/Container";
const LazyComponent = React.lazy(() => import("./Components/Counter"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/dinesh",
        element: <Otp />,
      },
      {
        path: "/counter",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <LazyComponent />{" "}
          </Suspense>
        ),
      },
      {
        path: "/sunitha",
        element: <Container />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
  {
    path: "/settings",
    element: <Settings />,
    children: [
      {
        path: "/settings/",
        element: <h1>Settings</h1>,
      },
      {
        path: "/settings/profile",
        element: <h1>Profile</h1>,
      },
    ],
  },
  {
    path: "/posts",
    loader: loader,
    element: <ProtectedRoute element={<Posts />} />,
  },
  {
    path: "/login",
    element: <AdminForm />,
  },
  {
    path: "/formik",
    element: <FormikForm />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
