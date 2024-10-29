import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import store from "./Redux/store";
import ProductCategory from "./Components/ProductCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <>Error</>,
    // children: [
    //   {
    //     path: "/",
    //     element: <h1>Home</h1>,
    //   },
    //   {
    //     path: "/dinesh",
    //     element: <></>,
    //   },
    //   {
    //     path: "/counter",

    //     element: (
    //       <Suspense fallback={<div>Loading...</div>}>
    //         {" "}
    //         <LazyComponent />{" "}
    //       </Suspense>
    //     ),
    //   },
    //   {
    //     path: "/sunitha",
    //     element: <Container />,
    //   },
    //   {
    //     path: "/list",
    //     element: <List />,
    //   },
    // ],
  },
  {
    path: "/product/:category",
    element: <ProductCategory />,
  },
  // ],
  // },
  // {
  //   path: "/posts",
  //   loader: loader,
  //   element: <ProtectedRoute element={<Posts />} />,
  // },
  // {
  //   path: "/login",
  //   element: <AdminForm />,
  // },
  // {
  //   path: "/formik",
  //   element: <FormikForm />,
  // },
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
