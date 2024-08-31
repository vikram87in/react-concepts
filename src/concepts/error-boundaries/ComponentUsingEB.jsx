import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';


export class ComponentUsingEB extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>

    );
  }
}

export default ComponentUsingEB;

class ChildComponent extends Component {



  render() {
    // throw new Error('manually thrown error');
    return (
      <>
        <h1>This is the heading</h1>
        <p>This is a paragragh</p>
        <ErrorBoundary>
          <GrandChild />
        </ErrorBoundary>
      </>
    );
  }
}

class GrandChild extends Component {

  throwError = () => {

    // this error thrown in the event handler won't be caught by the Error Boundary. Use try-catch for errors in event handlers
    throw new Error('this error has been thrown manually');
  };

  render() {
    return (
      <>
        <div>Hi there</div>
        {/* Below code will generate undefined error and will be caught in the Error Boundary */}
        <button onClick={this.object.property1}>Generate Error</button>
      </>
    );
  }
}