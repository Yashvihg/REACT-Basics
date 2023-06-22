import React from "react";
// import "./message.css";

//styles using bootstrap

export class Message extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.msgDetails.imageUrl}
            alt={this.props.msgDetails.message}
            class="card-img-top"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.msgDetails.message}</h5>
            <p className="card-text">From : {this.props.msgDetails.from}</p>
            <p className="card-text">To : {this.props.msgDetails.to}</p>
            <a href="#" className="btn btn-primary">
              click me
            </a>
          </div>
        </div>
      </div>

      // <div className="col-md-4">
      //   <img
      //     src={this.props.msgDetails.imageUrl}
      //     alt={this.props.msgDetails.message}
      //     height="200px"
      //     width="300px"
      //   />
      //   <h2> {this.props.msgDetails.message}</h2>
      //   <p>From : {this.props.msgDetails.from}</p>
      //   <p>To : {this.props.msgDetails.to}</p>
      // </div>
    );
  }
}

// export class Message extends React.Component {
//   render() {
//     // return <h3> Hello !</h3>;
//     // props are a dynamic way to represent data.
//     return (
//     );
//   }
// }
