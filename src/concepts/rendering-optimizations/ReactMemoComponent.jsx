import React, { Component, PureComponent, useState } from 'react';

function ReactMemoComponent() {
  const [count, setCount] = useState(0);
  console.log('render parent with state: ', count);

  const demoFun = () => {
    console.log('haha');
  };

  return (
    <div>
      {/* <PureChild age={23}  /> */}
      {/* <Child age={23}  /> */}
      <PureChildFunction age={23} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default ReactMemoComponent;


export class Child extends Component {
  render() {
    console.log('render child with prop: ', this.props.age);
    return (
      <div>Child</div>
    );
  }
}

export class PureChild extends PureComponent {
  render() {
    console.log('render child with prop: ', this.props.age);
    return (
      <div>Child</div>
    );
  }
}

const PureChildFunction = React.memo(function PureChildFunction(props) {
  console.log('render child with prop: ', props.age);

  return (
    <div>PureChildFunction</div>
  );
});

