// class (dom element) ---------------------------- createRef or callback
// function (dom element)  ------------------------------------- useRef

// class -> class (dom element) -------------------------- callback
// class -> class (component) ------------------------- createRef
// class -> function (dom)  ------------------------------ forwardRef
// class -> function (component)  ------------------------- forwardRef + useImperative

// function -> class (dom element)  --------------------------  forwardRef + pass ref as props; slightly tricky
// function -> class (component)  -------------------------  useRef
// function -> function (dom)   ----------------------------- forwardRef
// function -> function (component)  ------------------------- forwardRef + useImperative

import  React, { Component, createRef, useRef, forwardRef, useImperativeHandle } from 'react';

// --------------------------------------------------------------------------------------


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


// ---------------------------------------------------------------------------------------

// export default function DemoComponent() {

//   const inputRef = useRef();
//   return (
//     <div>
//       {/* <input type="text" ref={inputRef} /> */}
//       <ChildComponent ref={inputRef} />
//       <button onClick={() => {
//         console.log(inputRef.current);
//         inputRef.current.setFocus();
//       }}>function me</button>
//     </div>
//   );
// }

// class ChildComponent extends Component {
//   inputRef = createRef();
//   setFocus = () => {
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         child
//         <input type="text" ref={this.inputRef} />
//       </div>
//     );
//   }
// }

// const ChildComponent = forwardRef(function ChildComponent(props, ref) {

//   const inputRef = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       funFocus() {
//         inputRef.current.focus();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//     </div>
//   );
// });

// const ChildComponent = forwardRef(function ChildComponent(props, ref) {

//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

//------------------------------------------------------------------------------------------

// export default class DemoComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   setRef = (el) => {
//     this.textInputRef = el;
//   };

//   render() {
//     return (
//       <div>
//         {/* <input type="text" ref={this.setRef} /> */}
//         <ChildComponent inputRef={this.setRef} />
//         <button onClick={() => this.textInputRef.focus()}>Callback me</button>
//       </div>
//     );
//   }
// }

// class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <GrandChildComponent inputRef={this.props.inputRef} />
//       </div>
//     );
//   }
// }

// class GrandChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         grandchild
//         <input type="text" ref={this.props.inputRef} />
//       </div>
//     );
//   }
// }

// --------------------------------------------------------------------------------------------------------

// export default class DemoComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.textInputRef = createRef();
//   }

//   render() {
//     return (
//       <div>
//         {/* <input type="text" ref={this.textInputRef} /> */}
//         <ChildComponent ref={this.textInputRef} />
//         <button onClick={() => {
//           console.log(this.textInputRef.current);
//           this.textInputRef.current.funFocus();
//         }}>Focus me</button>
//       </div>
//     );
//   }
// }


// const ChildComponent = forwardRef(function ChildComponent(props, ref) {

//   const inputRef = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       funFocus() {
//         inputRef.current.focus();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//     </div>
//   );
// });

// class ChildComponent extends Component {
//   inputRef = createRef();

//   setFocus = () => {
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         child
//         <input type="text" ref={this.inputRef} />
//       </div>
//     );
//   }
// }



// --------------------------------------------------------------------------------------------------------

// export default function DemoComponent() {

//   const inputRef = useRef();

//   const handleClick = () => {
//     console.log('inputRef.current: ', inputRef.current);
//     inputRef.current.setFocus();
//   };

//   return (
//     <div>
//       {/* <input type="text" ref={inputRef} /> */}
//       <ChildComponent ref={inputRef} />
//       <button onClick={handleClick}>Focus me</button>
//     </div>
//   );
// }

// class ChildComponent extends Component {
//   inputRef = createRef();

//   setFocus = () => {
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         child
//         <input type="text" ref={this.inputRef} />
//       </div>
//     );
//   }
// }


// --------------------------------------------------------------------------------------------------------