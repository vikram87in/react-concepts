import React from 'react';

export default function Child1({ heading, subheading, render, renderButton, renderInput, buttonComponent, inputComponent }) {
  return (
    <div style={{ border: '2px solid red' }}>
      {heading}
      {subheading}
      {render && render()}
      {renderButton}
      {renderInput}
      {buttonComponent}
      {inputComponent()}
    </div>
  );
}
