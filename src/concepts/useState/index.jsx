import { useEffect, useState } from 'react';

//#region Parent Component
function Index() {
  return (
    <Counter />
  );
}
export default Index;

//#endregion


function Counter() {
  // Functions whose names start with use are called Hooks in React.
  // rules of hooks
  // 1. Only call hooks at the top level(not inside loops, conditions, or nested functions)
  // 2. Only call hooks from React function components or custom hooks(not regular functions or class components)

  // array destructuring
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}


// // Normal variable behaviour vs state variable behaviour
// function Counter() {
//   let [count, setCount] = useState(0);
//   let dummyCount = 0;

//   const handleClick = () => {
//     dummyCount++;
//     setCount(count + 1);
//   };

//   return (
//     <button onClick={handleClick}>
//       Count: {count} {dummyCount}
//     </button>
//   );
// }