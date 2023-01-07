/** @format */

import React from "react";
import PostsCount from "@/components/PostsCount";
import DisplayPosts from "@/components/DisplayPosts";

export default function ViewList({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      <PostsCount posts={posts}></PostsCount>
      <DisplayPosts posts={posts}></DisplayPosts>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
