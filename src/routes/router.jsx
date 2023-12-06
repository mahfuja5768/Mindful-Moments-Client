import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import { getSingleBlogs } from "../api/blogs";
import Wishlists from "../pages/Wishlists/Wishlists";
import AddNewBlog from "../pages/AddNewBlog/AddNewBlog";
import PrivateRoute from "./PrivateRoute";
import UpdateBlog from "../pages/BlogDetails/UpdateBlog";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/blog-details/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleBlogs(params.id),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            {" "}
            <Wishlists></Wishlists>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-blogs",
        element: (
          <PrivateRoute>
            <AddNewBlog></AddNewBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/featured-blogs",
        element: (
          <PrivateRoute>
            <FeaturedBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: "updateBlog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleBlogs(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
