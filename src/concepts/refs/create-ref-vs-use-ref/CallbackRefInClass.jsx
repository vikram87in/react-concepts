import React, { Component } from 'react';

export default class DemoComponent extends Component {
  constructor(props) {
    super(props);

    // this.textInputRef & this.customInputRef are explicitly initialized in the constructor. 
    // When an instance of MyComponent is created, the constructor runs and creates the ref.
    // If we don't want to explicitly use constructor, we can use instance property initializers like in CustomInput
    this.textInputRef = React.createRef();
    this.customInputRef = null;
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <CustomInput inputRef={el => this.customInputRef = el} />
        <button onClick={() => this.customInputRef.focus()}>Click me</button>
      </div>
    );
  }
}

function CustomInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
}
