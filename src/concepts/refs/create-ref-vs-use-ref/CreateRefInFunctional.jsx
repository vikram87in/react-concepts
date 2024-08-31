import { useState, createRef } from 'react';

export default function DemoComponent() {
  const [count, setCount] = useState(0);
  const myRef = createRef(); // not advisable to use createRef in functional component; use "useRef"

  const handleClick = () => {
    myRef.current = count + 1;
    console.log('value set in handleClick: ', myRef.current);
    setCount(count + 1);
  };

  if (!myRef.current) {
    // this if block will be called everytime as a new ref is created on every render

    console.log('inside if.... setting to 0');
    myRef.current = 0;
  }
  console.log('myref value on render: ', myRef.current);

  return (
    <div>
      Count: {count}
      <br />
      RefCount: {myRef.current}
      <br />
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
