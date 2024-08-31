import { Component } from 'react';

export default function withHoverColorChange(WrappedComponent) {

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
      return (
        <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={style} >

          {/* props are spread as it is to the WrappedComponent. Additional prop can also be passed */}
          <WrappedComponent {...this.props} additionalProp="useless" />
        </div>
      );
    }
  };
}


// below commented code showing the demo in functional component

/* 
import { useState } from 'react';

export default function withHoverColorChange(WrappedComponent) {

  return function WithHoverColorChangeHOC(props) {
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
      setHover(!hover);
    };
    const style = hover ? { color: 'red' } : {};
    return (
      <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={style} >

        <WrappedComponent {...props} additionalProp="useless" />
      </div>
    );
  };
}
*/