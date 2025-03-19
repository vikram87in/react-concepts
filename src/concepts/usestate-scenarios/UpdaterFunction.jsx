import React, { useState } from 'react';

export default function UpdaterFunction() {
  const initialObj = {
    name: '',
    age: 0,
    married: false
  };
  const [stateObj, setStateObj] = useState(initialObj);

  const handleClick = () => {

    // setStateObj(stateObj); // will not cause re-render as the same object is set in the setState

    // setStateObj({...stateObj}) // will cause re-render as a different object is set in the setState

    setStateObj(stateObj => {
      return { ...stateObj }; // updater function way; will cause re-render as a different object is set in the setState
    });

    // setStateObj(stateObj => {
    //   return stateObj; // will not cause re-render as the same object is set in the setState
    // })

  };

  console.log('>> render');
  return (
    <><div>Updater Function</div>
      <button onClick={handleClick}>Click to update</button></>
  );
}
