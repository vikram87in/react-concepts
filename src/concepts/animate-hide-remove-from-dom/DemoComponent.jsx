import React, { useEffect, useState } from 'react';

const FadeAndRemove = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false); // Remove element from DOM after 1.5 secs
    }, 1500); // Match this to your transition duration
  };

  useEffect(() => {
    if (shouldRender) {
      setIsVisible(true);
    }
  }, [shouldRender]);

  const handleShow = () => {
    setShouldRender(true);
  };

  return (
    <>
      <button onClick={handleClick}>Fade Out and Remove</button>
      <button onClick={handleShow}>Show and Fade In</button>
      {shouldRender && (
        <div className={`fade-and-shrink ${!isVisible ? 'hidden' : ''}`}>
          This element will fade out and be removed
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis commodi, expedita rerum quaerat unde, tempora sit recusandae repudiandae aspernatur delectus nobis sint voluptate aliquid, distinctio officia consectetur est voluptas mollitia?</p>
          
        </div>
      )}
    </>
  );
};

export default FadeAndRemove;
