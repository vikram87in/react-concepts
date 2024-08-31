import React, { Component } from 'react';

export class PossibleReturns extends Component {
  render() {
    return (
      <>
        <div>
          This is what happens when you return different types of things:
        </div>
        {true}
        {false}
        {null}
        {undefined}
        {NaN}
        <br />
        {'hi' && 0}
        <br />
        {'hi' && '0'}
        <br />
        {0 && 'hi'}
        <br />
        {'0' && 'hi'}
      </>
    );
  }
}

export default PossibleReturns;