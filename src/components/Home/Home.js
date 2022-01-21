import React from "react";
import AuthPrompt from "../Auth/AuthPrompt/AuthPrompt";
import BlogPosts from "../BlogPosts/BlogPosts";
import Form from "../Form/Form";

const Home = () => {
  return (
    <>
      <AuthPrompt />
      <Form />
      <BlogPosts></BlogPosts>
    </>
  );
};

export default Home;
