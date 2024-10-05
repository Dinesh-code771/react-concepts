import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Settings from "./Components/Settings";
import ErrorComponent from "./Components/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Components/Counter";
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
        element: <h1>Dinesh</h1>,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/sunitha",
        element: <h1>Sunitha</h1>,
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
    path: "/post/:id",
    element: <h1>Posts</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
