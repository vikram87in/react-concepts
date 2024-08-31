import { useRef, forwardRef, createRef, useImperativeHandle } from 'react';

// we want to set ref to access methods on the child component that the child component explicitly exposes through useImperativeHandle

export default function DemoComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current);
    inputRef.current.tooMuchFunFocus();
  }

  return (
    <div>
      <div>Forwarding Ref to expose methods example</div>
      <MyInput label="Enter your name:" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Click from parent
      </button>
    </div>
  );
}


// MyInput is a component that resulted after using forwardRef

const MyInput = forwardRef(function MyInput(props, passedRef) {
  const { label, ...otherProps } = props;
  const inputRef = useRef();

  const tooMuchFunFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(passedRef, () => {
    return {
      funFocus() { // one way of adding function
        inputRef.current.focus();
      },
      tooMuchFunFocus // another way of adding function
    };
  }, []);

  return (
    <>
      <label>
        {label}
        <input {...otherProps} ref={inputRef} />
      </label>
      <button onClick={tooMuchFunFocus}>Click to focus</button>
    </>
  );
});
