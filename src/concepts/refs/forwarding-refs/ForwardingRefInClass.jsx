import React, { useRef } from 'react';

export default function ParentComponent() {
  const childRef = useRef();

  const focusChildInput = () => {
    console.log(childRef.current);
    childRef.current.focus();
  };

  return (
    <div>
      <ForwardRefChildComponent ref={childRef} />
      <button onClick={focusChildInput}>Focus the class input from function parent</button>
    </div>
  );
}


// export default class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.childRef = React.createRef();
//   }

//   focusChildInput = () => {
//     // Using the ref to call a method inside the child class component
//     console.log(this.childRef.current);
//     this.childRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         <ForwardRefChildComponent ref={this.childRef} />
//         <button onClick={this.focusChildInput}>Focus the class input from class parent</button>
//       </div>
//     );
//   }
// }


const ForwardRefChildComponent = React.forwardRef((props, ref) => {
  return <ChildComponent forwaredRef={ref} {...props} />;
});

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return <input ref={this.props.forwaredRef} />;
  }
}



