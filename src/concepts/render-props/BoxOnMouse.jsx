import React from 'react';

class BoxOnMouse extends React.Component {
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
        <h1>Move the mouse around!</h1>
        <div style={{
          position: 'absolute', left: this.state.x - 50,
          top: this.state.y - 50,
          height: '100px',
          width: '100px',
          backgroundColor: 'blue'
        }} />
      </div>
    );
  }
}

export default BoxOnMouse;