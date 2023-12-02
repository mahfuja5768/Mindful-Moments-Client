import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AllBlogs from '../pages/AllBlogs/AllBlogs';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import { getSingleBlogs } from '../api/blogs';
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/all-blogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "/blog-details/:id",
          element: <BlogDetails></BlogDetails>,
          loader: ({params})=> getSingleBlogs(params.id)
        },
      ],
    },
    { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  ]);