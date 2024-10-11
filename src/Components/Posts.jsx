import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import * as Yup from "yup";
export default function Posts() {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <div
      style={{
        flex: 3,
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        border: "1px solid black",
        height: "100vh",
        margin: "15px",
        borderRadius: "0.5rem",
      }}
    >
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </div>
  );
}
