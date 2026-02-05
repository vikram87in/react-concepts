import { useEffect, useState } from 'react';

//#region Parent Component
function Index() {
  return (
    <Counter />
  );
}
export default Index;

//#endregion


// function Counter() {
//   // Functions whose names start with use are called Hooks in React.
//   // rules of hooks
//   // 1. Only call hooks at the top level(not inside loops, conditions, or nested functions)
//   // 2. Only call hooks from React function components or custom hooks(not regular functions or class components)

//   // array destructuring
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <button onClick={handleClick}>
//       Count: {count}
//     </button>
//   );
// }


// // Normal variable behaviour vs state variable behaviour
// function Counter() {
//   const [count, setCount] = useState(0);
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


// // Directly mutating state variable; setState replaces the state variable with the new value instead of merging it like in class components
// function Counter() {
//   let [count, setCount] = useState(0);
//   const [name, setName] = useState({ firstName: 'John', lastName: 'Doe' });

//   const handleClick = () => {
//     count += 1;
//     // setCount(count);
//     name.lastName += 'zzz';
//     setName(name);
//     // setName({ ...name, lastName: name.lastName + 'zzz' });
//   };

//   return (
//     <>
//       <button onClick={handleClick}>
//         Count:{count}
//       </button>
//       <br /><br /><br />
//       {name.firstName} {name.lastName}
//     </>
//   );
// }

// // Initializer function in useState
// function Counter() {
//   const [count, setCount] = useState(() => {
//     console.log('Initializer function called');
//     return 0;
//   });

//   const [count1, setCount1] = useState(returnInitialCount());

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>
//         Count:{count} {count1}
//       </button>
//     </>
//   );
// }

// function returnInitialCount() {
//   // // Block execution for 2-3 seconds
//   // const start = Date.now();
//   // while (Date.now() - start < 2500) {
//   //   // Busy wait - simulates heavy computation
//   // }
//   console.log('Unwanted Initializer function called');
//   return 0;
// }


// State updates are batched and Async; Calls for Updater function
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log('>> count: ', count);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>
        Increment by 3
      </button>
      <br /><br /><br />
      Count:{count}
    </>
  );
}