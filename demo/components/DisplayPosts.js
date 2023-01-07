/** @format */

import React from "react";

export default function DisplayPosts({ posts }) {
  return (
    <>
        <table>
          <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </table>
    </>
  );
}
