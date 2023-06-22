import React, { ReactNode } from "react";

type RatingProps = {
  noofstars: number;
  color: string;
};

export class Rating extends React.Component<RatingProps> {
  render(): ReactNode {
    let ratings = [];
    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <i
          className="fa-solid fa-star"
          style={{
            color: this.props.color == "" ? "orange" : this.props.color,
          }}
        ></i>,
      );
    }
    return ratings;
  }
}
