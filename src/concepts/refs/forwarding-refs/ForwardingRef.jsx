import { useRef, forwardRef, createRef } from 'react';

// we want to set ref to an input that is inside the child component (or inside the grandchild component)

export default function DemoComponent() {
  const inputRef = useRef(null);

  // we should not use createRef in functional components as it creates a new ref on every render.
  // const inputRef = createRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <div>Forwarding Ref example</div>
      <MyInput label="Enter your name:" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </div>
  );
}

// ///////////////////////////////////////////////////////////////////////////////////////////

// MyInput is a component that resulted after using forwardRef

const MyInput = forwardRef(function MyInput(props, passedRef) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={passedRef} />
    </label>
  );
});

// ///////////////////////////////////////////////////////////////////////////////////////////

// // MyInput is a component that resulted after using forwardRef

// const MyInput = forwardRef(function MyInput(props, passedRef) {
//   const { label, ...otherProps } = props;
//   return (
//     <label>
//       {label}
//       <ChildInput ref={passedRef} />
//     </label>
//   );
// });

// // ChildInput is a component that resulted after using forwardRef.

// const ChildInput = forwardRef(function ChildInput(props, passedRef) {
//   return (
//     <input {...props} ref={passedRef} />
//   );
// });

// ///////////////////////////////////////////////////////////////////////////////////////////