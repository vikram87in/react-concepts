import React, { Component } from 'react';

export default class DemoComponent extends Component {
  constructor(props) {
    super(props);

    // this.textInputRef & this.customInputRef are explicitly initialized in the constructor. 
    // When an instance of MyComponent is created, the constructor runs and creates the ref.
    // If we don't want to explicitly use constructor, we can use instance property initializers like in CustomInput
    this.textInputRef = React.createRef();
    this.customInputRef = React.createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <CustomInput ref={this.customInputRef} />
        <button onClick={() => this.customInputRef.current.focusTextInput()}>Click me</button>
      </div>
    );
  }
}

class CustomInput extends Component {

  // we used instance property initializers to create a ref (no need to explicitly define a constructor)
  inputRef = React.createRef();

  focusTextInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
