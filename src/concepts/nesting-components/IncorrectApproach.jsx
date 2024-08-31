import { useState, useEffect } from 'react';
function IncorrectApproach() {
  const [count, setCount] = useState(0);
  const handleClick = () => {setCount(count+1);};
  
  function AnotherComponent(){
    const [val, setVal] = useState('');
    
    useEffect(()=>{
      console.log('mount Another component');
      return ()=>{
        console.log('unmount Another component');
      };
    }, []);
    
    const handleChange = (e) => {
      setVal(e.target.value);
    };

    return (
      <>
        <input type="text" value={val} onChange={handleChange} />
      </>
    );
  }
  return (
    <>
      <AnotherComponent/>
      <br/>
      <button onClick={handleClick}>{count}</button>
    </>
  );
}

export default IncorrectApproach;