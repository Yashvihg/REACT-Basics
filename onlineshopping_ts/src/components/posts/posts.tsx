import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type PostState = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export default function Posts() {
  // empty array initially. ajaxified requests
  const [posts, setPosts] = useState<PostState[]>([]); // do not use <any> otherwise typescript is useless.
  // use effect got called when html was rendered in return
  let [postId, setPostId] = useState<string>("1");
  useEffect(() => {
    //async call
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    // console.log("Inside Use Effect !");
    // setPosts([{id:1, userId:1, title: "dummy", body:"Dummy"}]);
  }, []); // we add this to tell use effect that check changes only in these parameters.
  //  the second parameter is the dependency list -[].

  // return (
  //   <div>
  //     <header>
  //       <h1>Get Post By Id</h1>
  //     </header>
  //     <section>
  //       <label>
  //         Enter Post Id : <input type="text" value={postId} />{" "}
  //       </label>
  //       <div className="postTitle"></div>
  //     </section>
  //   </div>
  // );
  return (
    <div>
      <header>
        <h1>All Post</h1>
        <ul className="list-group">
          {posts.map((p) => (
            <li className="list-group-item list-group-item-primary m-1">
              <Link to={`/postDetails/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
