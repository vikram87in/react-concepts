import React, { useState } from 'react';
import Child from './Child1';

const ButtonComponent = ({ handleButtonClick, count }) => <button onClick={handleButtonClick}>{count}</button>;
function InputComponent({ value, handleInputChange }) {
  return <input type="text" value={value} onChange={handleInputChange} />;
}

export default function Parent1() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  // assigning the jsx to a variable that is passed to the Child component
  const heading = <h1>This is the heading set from the parent</h1>;

  // assigning the jsx to a function that is invoked when passing to the Child component
  const subheading = () => <h2>This is the subheading set from the parent</h2>;

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // assigning the jsx with event handlers to a variable that is used in this component and the Child component
  const renderButton = <button onClick={handleButtonClick}>{count}</button>;
  const renderInput = <input type="text" value={value} onChange={handleInputChange} />;

  // returning the jsx from a function, which can be invoked while passing prop to the Child or while rendering in this component itself
  // note: we use camelCase for such cases and not PascalCase. 
  const buttonComponent = () => <button onClick={handleButtonClick}>{count}</button>;
  const inputComponent = () => <input type="text" value={value} onChange={handleInputChange} />;

  // this is a mistake. never "define" a component inside another component. Instead, define them outside this component
  // const ButtonComponent = () => <button onClick={handleButtonClick}>{count}</button>;
  // const InputComponent = () => <input type="text" value={value} onChange={handleInputChange} />;

  return (
    <div>

      <Child
        heading={heading}
        subheading={subheading()}

        // passing the render prop to the child. The Child component will then call the render prop as a function invocation.
        render={() => <p> This is a paragraph set from parent and sent as a render prop</p>}

        renderButton={renderButton}
        renderInput={renderInput}
        buttonComponent={buttonComponent()}
        inputComponent={inputComponent}
      />
      <p>Following is the variable way of rendering</p>
      {renderButton}
      <br />
      {renderInput}
      <br /><br />
      <p>Following is the react way of rendering</p>
      {/* This is incorrect way of calling the components that have been commented above */}
      {/* <ButtonComponent  />
      <InputComponent  /> */}
      <br />
      <ButtonComponent handleButtonClick={handleButtonClick} count={count} />
      <br />
      <InputComponent handleInputChange={handleInputChange} value={value} />
      <br /><br />
      <p>Following is with invoking the function</p>
      <br />
      {buttonComponent()}
      <br />
      {inputComponent()}
    </div>
  );
};
