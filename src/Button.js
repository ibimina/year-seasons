import { React, Component } from "react";

class Button extends Component {
//   state = {};
 
  render() {
     console.log(this.props);
    let click = this.props.text
    return (
      <>
        <button onClick={this.props.onClick}>{click}</button>
      </>
    );
  }
}

export default Button;
