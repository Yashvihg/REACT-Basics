import React from "react";
import "./button.css";
type ButtonProps = {
  classes: string;
  children: string | React.ReactNode | React.ReactNode[];
  ClickHandler?: () => void;
};
export class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return (
      <button
        onClick={() => this.props.ClickHandler?.()}
        className={this.props.classes}
      >
        {/* this acts like a placeholder */}
        {this.props.children}  
      </button>
    );
  }
}
