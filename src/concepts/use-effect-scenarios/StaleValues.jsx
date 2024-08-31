import { useEffect, useState } from 'react';

function StaleValues() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function fun() {
      console.log('hi count: ', count);
    }

    window.addEventListener('click', fun);

    return () => {
      window.removeEventListener('click', fun);
    };

  }, []);
  // }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default StaleValues;