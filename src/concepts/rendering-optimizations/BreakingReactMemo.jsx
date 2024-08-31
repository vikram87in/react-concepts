import React, { Component, PureComponent, useState, useCallback } from 'react';


function BreakingReactMemo() {
  const [count, setCount] = useState(0);
  console.log('render parent with state: ', count);

  const demoFun = () => {
    console.log('haha');
  };

  // const demoFun = useCallback(() => {
  //   console.log('haha');
  // }, []);

  return (
    <div>
      {/* <PureChild demoFun={demoFun} /> */}
      {/* <Child demoFun={demoFun}  /> */}
      <PureChildFunction demoFun={demoFun} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default BreakingReactMemo;

// export class BreakingReactMemo extends Component {
//   state = { count: 0 };

//   demoFun = () => {
//     console.log('haha');
//   };

//   render() {
//     console.log('render class parent with state: ', this.state.count);
//     return (
//       <div>
//         <PureChild demoFun={this.demoFun} />
//         {/* <Child demoFun={this.demoFun}  /> */}
//         {/* <PureChildFunction demoFun={this.demoFun} /> */}
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
//       </div>
//     );
//   }
// }

// export default BreakingReactMemo;

export class Child extends Component {
  render() {
    console.log('render child');
    return (
      <div>Child</div>
    );
  }
}

export class PureChild extends PureComponent {
  render() {
    console.log('render purechild');
    return (
      <div>PureChild</div>
    );
  }
}

const PureChildFunction = React.memo(function PureChildFunction(props) {
  console.log('render purechildfunction');

  return (
    <div>PureChildFunction</div>
  );
})

