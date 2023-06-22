import React, { useEffect, useState } from "react";

export type PostState = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};
export default function GetPostById() {
  const [post, setPost] = useState<PostState>({});
  let [postId, setPostId] = useState<string>("1");

  useEffect(() => {
    // async call
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        setPost(post);
      });
  }, [postId]);
  return (
    <div>
      <header>
        <h1>Get Post By Id</h1>
      </header>
      <section>
        <label>
          Enter Post Id :{" "}
          <input
            type="text"
            value={postId}
            onChange={(e) => {
              setPostId(e.target.value);
              console.log(e.target.value);
            }}
          />{" "}
        </label>
        <div className="postTitle">{post.title}</div>
      </section>
    </div>
  );
}
