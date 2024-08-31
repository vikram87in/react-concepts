function ChildComponent(props) {
  return <p>{props.text}</p>;
}

export default ChildComponent;


// below commented code showing the demo in class component

/*
import { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

export default ChildComponent;
*/