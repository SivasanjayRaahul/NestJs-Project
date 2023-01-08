/** @format */

import React from "react";

export default function DisplayPosts({ posts }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
          {posts.map((post) => {
            return (
              <tr id={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
