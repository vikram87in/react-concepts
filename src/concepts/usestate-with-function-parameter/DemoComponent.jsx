import React, { useState } from 'react';

function initialValueFunction() {
  // This function will be called only once on initial render and not on subsequent rerenders
  console.log('initialValueFunction called');
  return 0;
}

function calledOnEveryRenderFunction() {
  // This function will be called on every render
  console.log('calledOnEveryRenderFunction called');
  return 0;
}

const MyComponent = () => {
  const [count, setCount] = useState(() => initialValueFunction()); //  Passing an Inline Function (Lazy Initialization)

  // There are these 2 other ways to pass function reference to useState; All these methods ensure that the function will be called only once on initial render and not on subsequent rerenders

  // const [count, setCount] = useState(initialValueFunction); //  Passing function reference
  // const [count, setCount] = useState(()=> {
  //   console.log('initialValueFunction called inline');	
  //   return 0;
  // });

  
  const [count1, setCount1] = useState(calledOnEveryRenderFunction()); // calling the function directly will cause it to be called on every render; don't use this approach for expensive computations

  console.log('>> render'); // this console log with be called on every render.
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;