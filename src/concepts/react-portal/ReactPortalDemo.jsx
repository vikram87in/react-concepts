import React from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends React.Component {
  state = {
    showPortal: false
  };

  handleParentClick = (e) => {
    // e.target is the element that was clicked; e.currentTarget is the element that the event listener is attached to
    // in case of bubbling, e.target does not change, but e.currentTarget changes as the event bubbles up
    // click on the child div and see the difference
    console.log('>> Parent clicked, e.target, e.currentTarget', e.target, e.currentTarget);
  };

  handleChildClick = (e) => {
    console.log('>> Child clicked, e.target, e.currentTarget', e.target, e.currentTarget);
  };

  render() {
    return (
      <div onClick={this.handleParentClick}>
        <h1>MyComponent</h1>
        <div id='portal-root'>This is a normal div</div>
        <div className='child-div' onClick={this.handleChildClick}>This is another div</div>
        <button onClick={() => this.setState({ showPortal: true })}>Click to re-render</button>
        {this.state.showPortal && <ReactPortal />}
      </div>
    );
  }
}

class ReactPortal extends React.Component {
  render() {
    // createPortal will render the content inside the element with id portal-root
    return ReactDOM.createPortal(
      <div>This is being rendered inside a portal</div>,
      document.getElementById('portal-root')
    );
  }
}