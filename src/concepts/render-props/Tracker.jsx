import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBoxShown: false
    };
  }

  handleClick = () => {
    this.setState({ isBoxShown: !this.state.isBoxShown });
  };

  render() {
    return (
      <>
        <h1>Move the mouse around!!</h1>
        <button onClick={this.handleClick}>Switch Mode</button>
        {/* <Mouse>
          <RenderBoxOnMouse />
        </Mouse> */}

        <Mouse render={(x, y) => {
          return this.state.isBoxShown
            ? <RenderBoxOnMouse x={x} y={y} />
            : <Para x={x} y={y} />;
        }
        } />
      </>
    );
  }
}


class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* {this.props.children} */}
        {this.props.render(this.state.x, this.state.y)}
      </div>
    );
  }
}

function Para({ x, y }) {
  return (
    <p>The current mouse position is ({x}, {y})</p>
  );
}

function RenderBoxOnMouse({ x, y }) {
  return (
    <div src="/cat.jpg" style={{
      position: 'absolute', left: x - 50,
      top: y - 50,
      height: '100px',
      width: '100px',
      backgroundColor: 'blue'
    }} />
  );
}

export default Tracker;