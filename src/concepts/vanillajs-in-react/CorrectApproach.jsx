import { useState } from 'react';

function CorrectReact() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Count is {count}</div>
      <div>
        <button onClick={handleClick}>
          Add One
        </button>
      </div>
    </>
  );
}

export default CorrectReact;