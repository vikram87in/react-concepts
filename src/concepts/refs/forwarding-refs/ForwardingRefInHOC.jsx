import { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <>
        <p>{this.props.text}</p>
        <input type="text" ref={this.props.refProp} />
      </>
    );
  }
}

const HoverableComponent = withHoverColorChange(ChildComponent);

export class ParentComponent extends Component {

  handleClick1 = () => {
    this.inputRef.focus();
  };

  setRef1 = (el) => {
    this.inputRef = el;
  };

  setRef2 = (el) => {
    this.inputRef2 = el;
  };

  handleClick2 = () => {
    this.inputRef2.focus();
  };

  render() {
    return (
      <>
        <ChildComponent text="I am so cool" refProp={this.setRef1} />
        <button onClick={this.handleClick1}>Click Me</button>
        <br /><br /><br />
        <HoverableComponent text="I am cool and can change color too!" refProp={this.setRef2} />
        <button onClick={this.handleClick2}>Click Me</button>
      </>
    );
  }
}

export default ParentComponent;

function withHoverColorChange(WrappedComponent) {

  // WrappedComponent would be wrapped inside withHoverColorChangeHOC
  return class withHoverColorChangeHOC extends Component {
    state = {
      hover: false
    };

    toggleHover = () => {
      this.setState({ hover: !this.state.hover });
    };

    render() {
      const style = this.state.hover ? { color: 'red' } : {};
      const { refProp, ...remainingProps } = this.props;
      return (
        <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={style} >

          {/* props are spread as it is to the WrappedComponent. Additional prop can also be passed */}
          <WrappedComponent {...remainingProps} refProp={refProp} additionalProp="useless" />
        </div>
      );
    }
  };
}