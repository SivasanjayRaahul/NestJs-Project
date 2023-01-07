/** @format */

import React from "react";

export default function PostsCount({ posts }) {
  return (
    <>
      <h3>Total posts: {posts.length}</h3>
    </>
  );
}
