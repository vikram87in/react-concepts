import { useState } from 'react';

import Display from './Display';

// This is the "main" file for the concept - the launcher only ever

// renders index.jsx directly. Display.jsx is an internal helper

// component that index.jsx composes; the launcher never lists or

// renders it on its own.

function CounterWithChild() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {' '}
      <h2>Counter With Child (dummy concept)</h2>
      <Display count={count} />
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default CounterWithChild;
