import { useState, useRef } from 'react';

export default function DemoComponent() {
  const input1 = useRef('');
  const input2 = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent the default behaviour of page refresh
    console.log(input1.current.value + ' ' + input2.current.value);
  };
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={input1} />
        <br />
        <input type="text" ref={input2} />
        <br />
        <button type="submit" style={{ display: 'none' }} >Click Me</button>
      </form>
    </div>
  );
}