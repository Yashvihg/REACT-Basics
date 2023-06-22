import { Message } from "../message/message";
import "./App.css";
import React from "react";
import Posts from "../posts/posts";
import { Message_Functional } from "../functional/message.functional";
// class App extends React.Component {
//   render() {
//     return <Posts />;
//   }
// }  
function App(){
  return <Message_Functional msg = "Hello"/>
}
export default App;

// import { Message } from "../message/message";
// import {Posts} from "../posts/posts"
// // import "./App.css";
// import React from "react";
// class App extends React.Component {
//   messages = [
//     {
//       message: "Hey",
//       from: "John",
//       to: "Wick",
//       imageUrl:
//         "https://www.shutterstock.com/image-vector/vector-illustartion-speech-bubble-hey-260nw-1821011048.jpg",
//     },
//     {
//       message: "Hello",
//       from: "John",
//       to: "Carter",
//       imageUrl:
//         "https://www.shutterstock.com/image-vector/hi-hello-banner-speech-bubble-260nw-1568270164.jpg",
//     },
//     {
//       message: "Hola",
//       from: "John",
//       to: "Mills",
//       imageUrl:
//         "https://www.shutterstock.com/shutterstock/photos/1534173101/display_1500/stock-vector--hola-hi-or-hello-in-spanish-on-spanish-flag-background-made-of-brush-strokes-1534173101.jpg´",
//     },
//   ];

//   render() {
//     let listofmessages = this.messages.map((m) => <Message msgDetails={m} />);
//     return <div className="row">{listofmessages}</div>;
//   }
// }
// export default App;

//using custom styling

// render() {
//   let listofmessages = this.messages.map((m) => <Message msgDetails={m} />);
//   return <div className="msg-item-container">{listofmessages}</div>;
// }

// import logo from "./logo.svg";
// import { Message } from "./Message";
// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   messageOne = {
//     message: "Hey",
//     from: "John",
//     to: "Wick",
//     imageUrl:
//       "https://www.shutterstock.com/image-vector/vector-illustartion-speech-bubble-hey-260nw-1821011048.jpg",
//   };
//   messageTwo = {
//     message: "Hello",
//     from: "John",
//     to: "Carter",
//     imageUrl:
//       "https://www.shutterstock.com/image-vector/hi-hello-banner-speech-bubble-260nw-1568270164.jpg",
//   };
//   render() {
//     return (
//       <>
//         <Message msgDetails={this.messageOne} />
//         <Message msgDetails={this.messageTwo} />
//       </>
//     );
//   }
// }
// export default App;

// render() {
//   return (
//     <>
//       {/* // return <h1>Hello Component !</h1>; */}
//       <Message msgDetails={this.messageOne} />
//       <Message msgDetails={this.messageTwo} />
//     </>
