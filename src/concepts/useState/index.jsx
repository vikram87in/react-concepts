import { useState } from 'react';

//#region Parent Component
function Index() {
  return (
    <Counter />
  );
}
export default Index;

//#endregion


function Counter() {
  // array destructuring
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(c => c + 1);
  };

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}