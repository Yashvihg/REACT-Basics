//functional based component

import { useState } from "react";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating";
import { Button } from "../button/button";

type ProductProps = {
  productdetails: ProductModel;
};

type ProductState = {
  currLikes: number;
  isFavourite: boolean;
};
export default function Product(props: ProductProps) {
  let [productState, setProductState] = useState<ProductState>({
    currLikes: props.productdetails.likes,
    isFavourite: false,
  });
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card rounded-0" style={{ boxShadow: "3px 3px 5px gray" }}>
        <img
          src={props.productdetails.imageUrl}
          alt={props.productdetails.title}
          className="card-img-top rounded-0"
          height="200px"
        />
        <div className="card-body p-2">
          <div className="d-flex flex-wrap justify-content-between">
            <h5 className="card-title">{props.productdetails.title}</h5>
            <p className="card-text m-0">
              <Rating noofstars={props.productdetails.rating} color="orange" />
            </p>
          </div>

          <p className="card-text "> ₹.{props.productdetails.price}</p>

          <div className="d-flex flex-wrap">
            {/* here we spread the properties of productState. and we override the value for currLikes since we call all the values using the spread operator. */}
            <Button
              classes="btn btn-primary rounded-0 text-light"
              ClickHandler={() =>
                setProductState({
                  ...productState,
                  currLikes: productState.currLikes + 1,
                })
              }
            >
              <i className="fa-solid fa-thumbs-up"></i> {productState.currLikes}
            </Button>

            <Button
              classes="btn btn-primary btn-outline rounded-0 mx-1 text-dark"
              ClickHandler={() =>
                setProductState({
                  ...productState,
                  // isFavourite: productState.isFavourite = !productState.isFavourite,
                  isFavourite: !productState.isFavourite,
                })
              }
            >
              {productState.isFavourite ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </Button>
            <Button classes="btn btn-danger rounded-0 text-light">
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>

          {/* <Button bgColor="white" textColor="black" text="Add to favourite" /> */}
        </div>
        <Button classes="btn btn-primary btn-purple rounded-0 border-0 m-1 font-weight-bold">
          <i className="fa-solid fa-cart-plus"></i> Add to cart
        </Button>
      </div>
    </div>
  );
}

//products.tsx

// import React from "react";
// import { ProductModel } from "../../models/product.model";
// import { Button } from "../button/button";
// import { Rating } from "../rating/rating";

// // interface ProductProps {
// //   productdetails: ProductModel;
// // }

// type ProductProps = {
//   productdetails: ProductModel;
// };

// class Product extends React.Component<ProductProps> {
//   state = { currLikes: this.props.productdetails.likes, isFavourite: false };
//   IncrementLikes() {
//     //this.props.productdetails.likes += 1; // props are readonly
//     // this.state.currLikes += 1; // state is immutable
//     console.log(this);
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }

//   ToggleFavourite() {
//     // this.state.isFavourite = !this.state.isFavourite; //this is wrong since state is not mutable.
//     this.setState({isFavourite: this.state.isFavourite = !this.state.isFavourite});
//   }
//   render(): React.ReactNode {
//     return (
//       <div className="col-sm-6 col-md-4 col-lg-3">
//         <div
//           className="card rounded-0"
//           style={{ boxShadow: "3px 3px 5px gray" }}
//         >
//           <img
//             src={this.props.productdetails.imageUrl}
//             alt={this.props.productdetails.title}
//             className="card-img-top rounded-0"
//             height="200px"
//           />
//           <div className="card-body p-2">
//             <div className="d-flex flex-wrap justify-content-between">
//               <h5 className="card-title">{this.props.productdetails.title}</h5>
//               <p className="card-text m-0">
//                 <Rating
//                   noofstars={this.props.productdetails.rating}
//                   color="orange"
//                 />
//               </p>
//             </div>

//             <p className="card-text "> ₹.{this.props.productdetails.price}</p>

//             <div className="d-flex flex-wrap">
//               <Button
//                 classes="btn btn-primary rounded-0 text-light"
//                 ClickHandler={() => this.IncrementLikes()}
//               >
//                 <i className="fa-solid fa-thumbs-up"></i> {this.state.currLikes}
//               </Button>

//               <Button
//                 classes="btn btn-primary btn-outline rounded-0 mx-1 text-dark"
//                 ClickHandler={() => this.ToggleFavourite()}
//               >
//                 {this.state.isFavourite ? (
//                   <i className="fa-solid fa-heart"></i>
//                 ) : (
//                   <i className="fa-regular fa-heart"></i>
//                 )}
//               </Button>
//               <Button classes="btn btn-danger rounded-0 text-light">
//                 <i className="fa-solid fa-trash"></i>
//               </Button>
//             </div>

//             {/* <Button bgColor="white" textColor="black" text="Add to favourite" /> */}
//           </div>
//           <Button classes="btn btn-primary btn-purple rounded-0 border-0 m-1 font-weight-bold">
//             <i className="fa-solid fa-cart-plus"></i> Add to cart
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Product;

// import React from "react";
// import { ProductModel } from "../../models/product.model";
// import { Button } from "../button/button";
// import { Rating } from "../rating/rating";

// // interface ProductProps {
// //   productdetails: ProductModel;
// // }

// type ProductProps = {
//   productdetails: ProductModel;
// };

// class Product extends React.Component<ProductProps> {
//   // state = {currLikes:10};
//   state = {currLikes: this.props.productdetails.likes};
//   ClickHandler() {
//     // console.log("U clicked");
//     //console.log(this); //this comes as undefined
//     this.setState({currLikes: this.state.currLikes + 1});
//  }
//   render(): React.ReactNode {
//     return (
//       <div className="col-sm-6 col-md-4 col-lg-3">
//         <div
//           className="card rounded-0"
//           style={{ boxShadow: "3px 3px 5px gray" }}
//         >
//           <img
//             src={this.props.productdetails.imageUrl}
//             alt={this.props.productdetails.title}
//             className="card-img-top rounded-0"
//             height="200px"
//           />
//           <div className="card-body p-2">
//             <div className="d-flex flex-wrap justify-content-between">
//               <h5 className="card-title">{this.props.productdetails.title}</h5>
//               <p className="card-text m-0">
//                 <Rating
//                   noofstars={this.props.productdetails.rating}
//                   color="orange"
//                 />
//               </p>
//             </div>

//             <p className="card-text "> ₹. {this.props.productdetails.price}</p>

//             <div className="d-flex flex-wrap">
//               {/* <button className="btn btn-primary" onClick={() => this.ClickHandler()}>
//                 <i className="fa-solid fa-thumbs-up"></i>{this.state.currLikes}
//                 {this.props.productdetails.likes}
//               </button> */}
//               {/* <Button classes="btn btn-primary btn-outline rounded-0 mx-1 text-dark">
//                 <i className="fa-regular fa-heart"></i>
//               </Button> */}
//               <Button classes="btn btn-danger rounded-0 text-light">
//                 <i className="fa-solid fa-trash"></i>
//               </Button>
//             </div>

//             {/* <Button bgColor="white" textColor="black" text="Add to favourite" /> */}
//           </div>
//           <Button classes="btn btn-primary btn-purple rounded-0 border-0 m-1 font-weight-bold">
//             <i className="fa-solid fa-cart-plus"></i> Add to cart
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Product;
