import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../posts/getPostById";
import { GrandParent } from "../contextapi/contextapi";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NewProduct from "../newproduct/newproduct";
import PostDetails from "../postDetails/postDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

class App extends React.Component {
  render(): React.ReactNode {
    // return <Posts />;
    // return <ListOfProducts />;
    // return <Counter initialValue={100} initialAge={18}/>;
    // return <GetPostById />
    // return <GrandParent />;
    return (
      <BrowserRouter>
      <Link to="/">Products</Link> | <Link to="/posts">Posts</Link>
        <Routes>
          <Route path="/" element={<ListOfProducts />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/postbyid" element={<GetPostById />}></Route>
          <Route path="/postDetails/:id" element={<PostDetails />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>

          {/* <Route path="/getPostById" element={<Posts />}></Route> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;



// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Link to="/">Products</Link> | <Link to="/posts">Posts</Link>
//         <Routes>
//           <Route path="/" element={<ListOfProducts />}></Route>
//           <Route path="/posts" element={<Posts />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;