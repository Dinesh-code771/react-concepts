import React from "react";
import { getPosts } from "./getPosts";

export default async function loader() {
  const posts = await getPosts();
  console.log(posts, "pose");

  return { posts };
}
