import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.log('1. getDerivedStateFromError: error: ', error);
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log('2. log this error: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;