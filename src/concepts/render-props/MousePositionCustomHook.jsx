import { useState, useEffect } from 'react';

// This is our custom hook for tracking mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

const App = () => {

  // all we need from the custom hook is the coordinates and a function that updates the coordinates
  const { x, y } = useMousePosition(); 

  return (
    <h1>
      The mouse position is ({x}, {y})
    </h1>
  );
};

export default App;