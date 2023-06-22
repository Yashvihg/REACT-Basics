import React from "react";
export class Cards extends React.Component {
  render() {
    return (
      <>
        {/* <h1> This is displaying from Cards. jsx</h1> */}
        <div className="col-md-3 m-1 ">
          <div className="card">
            <img
              src={this.props.cardDetails.imageUrl}
              alt={this.props.cardDetails.id}
              class="card-img-top"
              height="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.cardDetails.title}</h5>
              <p className="card-text">
                Rating : {this.props.cardDetails.rating}
              </p>
              <p className="card-text">
                Likes : {this.props.cardDetails.likes}
              </p>
              <p className="card-text">
                Price : {this.props.cardDetails.price}
              </p>
              <a href="#" className="btn btn-primary">
                click me
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
