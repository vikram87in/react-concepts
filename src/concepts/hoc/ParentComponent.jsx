import { Component } from 'react';
import ChildComponent from './ChildComponent';
import withHoverColorChange from './withHoverColorChangeHOC';

const HoverableComponent = withHoverColorChange(ChildComponent);

export class ParentComponent extends Component {
  render() {
    return (
      <>
        <ChildComponent text="I am so cool" />
        <br /><br /><br />
        <HoverableComponent text="I am cool and can change color too!" />
      </>
    );
  }
}

export default ParentComponent;

// below commented code showing the demo in functional component

/*

function ParentComponent() {
  return (
    <>
      <ChildComponent text="I am so cool" />
      <br /><br /><br />
      <HoverableComponent text="I am cool and can change color too!" />
    </>
  );
}

export default ParentComponent;

*/
