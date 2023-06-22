import "./App.css";
import React from "react";
import { Cards } from "../Cards/Cards";
class App extends React.Component {
  products = [
    {
      id: 1,
      title: "bose speaker",
      rating: 10,
      likes: 5,
      price: 10000,
      imageUrl:
        "https://5.imimg.com/data5/YX/UD/MY-76608250/bose-soundlink-mini-ii-wireless-bluetooth-speakers-500x500.jpg",
    },
    {
      id: 2,
      title: "IPhone X",
      rating: 9,
      likes: 4,
      price: 60000,
      imageUrl:
        "https://www.apple.com/in/iphone-14/images/meta/iphone-14_overview__ewkgx3s30v8m_og.png",
    },
    {
      id: 3,
      title: "MacBook Air",
      rating: 9,
      likes: 5,
      price: 1000000,
      imageUrl:
        "https://www.digitaltrends.com/wp-content/uploads/2020/12/macbook-air-m1.jpg",
    },
    {
      id: 4,
      title: "MacBook Pro",
      rating: 10,
      likes: 5,
      price: 1500000,
      imageUrl:
        "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg",
    },
    {
      id: 5,
      title: "Boat earphones",
      rating: 7,
      likes: 4,
      price: 2000,
      imageUrl:
        "https://images.freekaamaal.com/featured_images/177127_Untitleddesign(5).png",
    },
  ];
  render() {
    
        {/* <h1>This is being displayed from app.js</h1> */}
        let listofProducts = this.products.map(p => <Cards cardDetails = {p} />);
    return (<div className="row align-items-center justify-content-left">{listofProducts}</div>);
  }
}

export default App;
