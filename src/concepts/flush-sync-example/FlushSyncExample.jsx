import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

// What happens here: First the initial state is {0,0,0}. So, initially the render will console {0,0,0} and same for the useeffect.
// When button is clicked, count1 is set to 1 (but in pending state). Then flushSync is called which sets the count2 to 1 and then straightaway flushes the DOM 
// (i.e. take a break from the current execution flow and calls the render). So render now logs {1,1,0}  (reflecting the pending states as well). 
// However this change does not reflect on the browser yet. Then useeffect runs and logs the same {1,1,0}. 
// Then, the control is resumed from where it was left (line after flushSync). count1 is set to 0 (in pending) and count3 is set to 1 (in pending). 
// The log statement still logs {0,0,0} because those were the values when the handleClick function was called and since the state 
// updates are async and does not reflect until the next render.
// Now, when the render is again called, it logs {0, 1, 1} (changes reflected from earlier pending states). Same is shown in the useeffect. 
// Also note that the screen appears to be updated (browser paint) only once even if the render is called twice when the button is clicked.

export default function FlushSyncExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log('in useeffect: ', count1, count2, count3);
  });

  const handleClick = () => {
    setCount1(count1 + 1);
    flushSync(() => {
      setCount2(count2 + 1);
    });
    setCount1(count1);
    setCount3(count3 + 1);
    console.log('after click: ', count1, count2, count3);
  };

  console.log('render: ', count1, count2, count3);
  return (
    <div>
      {count1}
      <br></br>
      {count3}
      <br></br>
      {count3}
      <br></br>
      <button onClick={handleClick}>Click to increment</button>
    </div>
  );
}
