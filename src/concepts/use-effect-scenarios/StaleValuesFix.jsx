import { useEffect, useState, useRef } from 'react';

function StaleValuesFix() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // called only when count changes
  useEffect(() => {
    countRef.current = count;
  }, [count]);


  // called only once
  useEffect(() => {
    function fun() {
      console.log('count: ', countRef.current);
    }
    window.addEventListener('click', fun);

    return () => {
      window.removeEventListener('click', fun);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default StaleValuesFix;