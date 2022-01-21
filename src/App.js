import React from "react";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import BlogPostSingleFull from "./components/BlogPosts/BlogPostSingleFull/BlogPostSingleFull";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthPrompt from "./components/Auth/AuthPrompt/AuthPrompt";
import AuthForm from "./components/Auth/AuthForm/AuthForm";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/social-blog-ghpages/" element={<Home />}></Route>
        <Route
          path="/social-blog-ghpages/post/:postId"
          element={<BlogPostSingleFull />}
        ></Route>
        <Route path="/social-blog-ghpages/auth" element={<AuthForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <BlogPosts></BlogPosts>
          <BlogPostSingleFull></BlogPostSingleFull> */
}
