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




// // Unmounting resets state
// function Counter() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>

//       {show && <Counter1 />}
//     </>
//   );
// }

// function Counter1() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
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





// // State updates are batched and Async; Calls for Updater function
// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log('>> count: ', count);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>
//         Increment by 3
//       </button>
//       <br /><br /><br />
//       Count:{count}
//     </>
//   );
// }





// // Different components at same position don't retain state;
// function Counter() {
//   const [isPerson, setIsPerson] = useState(true);

//   return (
//     <>
//       <button onClick={() => setIsPerson(!isPerson)}>
//         Switch Component
//       </button>

//       {/* DIFFERENT components at same position */}
//       {isPerson ? (
//         <PersonCounter />
//       ) : (
//         <AnimalCounter />
//       )}
//     </>
//   );
// }

// function PersonCounter() {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(c => c + 1)}>Person: {count}</button>;
// }

// function AnimalCounter() {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(c => c + 1)}>Animal: {count}</button>;
// }




// // Same component at same position retains state;
// function Counter() {
//   const [isRed, setIsRed] = useState(true);

//   return (
//     <>
//       <button onClick={() => setIsRed(!isRed)}>
//         Toggle Color
//       </button>

//       {/* Same component (Counter1), same position (first child) */}
//       {isRed ? (
//         <Counter1 color="red" />
//       ) : (
//         <Counter1 color="blue" />
//       )}
//     </>
//   );
// }

// function Counter1({ color }) {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(c => c + 1)} style={{ color }}>
//       Count: {count}
//     </button>
//   );
// }






// // Force state reset with key prop
// function Counter() {
//   const [resetKey, setResetKey] = useState(0);
//   const [color, setColor] = useState('red');

//   return (
//     <>
//       <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
//         Toggle Color (State Preserved)
//       </button>
//       <button onClick={() => setResetKey(k => k + 1)}>
//         Reset Counter (Change Key)
//       </button>
//       <br /><br />
//       {/* Changing key forces React to unmount and remount */}
//       <Counter1 color={color} key={resetKey} />
//     </>
//   );
// }

// function Counter1({ color }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Counter1 mounted!');
//     return () => console.log('Counter1 unmounted!');
//   }, []);

//   return (
//     <button onClick={() => setCount(c => c + 1)} style={{ color }}>
//       Count: {count}
//     </button>
//   );
// }