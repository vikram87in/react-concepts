import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export default function DemoComponent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [val, setVal] = useState(0);

  const handleClick = () => {
    flushSync(() => {
      setCount(c => c + 1);
    });
    // React has updated the DOM by now
    flushSync(() => {
      setVal(f => f + 1);
    });
  };

  console.log('just before render');
  return (
    <><div>DemoComponent</div>
      {count}
      {val}
      {value}
      <button onClick={handleClick}>Click me</button></>
  );
}
