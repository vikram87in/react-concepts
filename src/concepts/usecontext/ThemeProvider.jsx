import { Component } from 'react';
import { createContext, useState } from 'react';

// named export
export const ThemeContext = createContext({ setTheme: () => { console.log('set default'); }, theme: 'defaultColor' });

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');
//   const propsObj = { theme, setTheme };

//   return (
//     <ThemeContext.Provider value={propsObj}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


class ThemeProvider extends Component {
  state = { theme: 'light' };

  setTheme = (theme) => {
    this.setState({ theme });
  };

  render() {

    // The code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.
    // To get around this, lift the value into the parent’s state like this: 
    // this.state = {
    //   propsObj: {.... },
    // };
    // ... 
    // <ThemeContext.Provider value={this.state.propsObj}>

    const propsObj = { theme: this.state.theme, setTheme: this.setTheme };
    return (
      <ThemeContext.Provider value={propsObj}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}


// default export
export default ThemeProvider;