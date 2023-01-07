/** @format */

import React from "react";
import PostsCount from "@/components/PostsCount";
import DisplayPosts from "@/components/DisplayPosts";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function ViewList({ posts }) {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn()
    }
  });

  // // useEffect(() => {
  // //   if (status === 'unauthenticated') signIn();
  // // }, [status]);

  // if (status !== 'authenticated') {
  //   return <h2>Loading...</h2>;
  // }
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
