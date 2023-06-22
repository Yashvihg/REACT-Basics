import React, { Component } from "react";

  export default class Posts extends Component {
    state = { posts: [] };
    render() {
      console.log("Render !");
      return (
        <div>
          <ul>
            {this.state.posts.map(p => (
              <li>{p.title}</li>
            ))}
          </ul>
        </div>
      );
    }
    async componentDidMount() {
      try {
        console.log("ComponentDidMount !");
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await response.json();
        this.setState({ posts });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  