import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostState } from "../posts/getPostById";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<PostState>({});

  useEffect(() => {
    // async call
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        console.log(post);
        setPost(post);
      });
  }, []);
  return (
    <div>
      <header>
        <h1>Get Post By Id</h1>
      </header>
      <section>
        <div className="postId">Id : {post.id}</div>
        <div className="postBody">Body : {post.body}</div>
        <div className="postTitle">Title : {post.title}</div>
      </section>
    </div>
  );
}
