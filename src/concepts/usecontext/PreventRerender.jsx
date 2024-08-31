import { memo, PureComponent, useState } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider';

export default function PreventRerender() {
  console.log('PreventRerender render');
  const [count, setCount] = useState(0);
  return (
    <>
      MainComponent
      <br /><br /><br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br /><br />
      <ChildComponent />
    </>
  );
}

const ChildComponent = function ChildComponent() {
  console.log('ChildComponent render');
  return (
    <ThemeProvider>
      ChildComponent
      <br />
      <GrandChildComponent />
    </ThemeProvider>
  );
};

class GrandChildComponent extends PureComponent {

  onClick = (theme, setTheme) => {
    console.log('onclick: thme: ', theme);
    const updatedTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  render() {
    console.log('GrandChildComponent render');
    return (
      <ThemeContext.Consumer>
        {
          (context) => {
            const { theme, setTheme } = context;
            console.log('consumer render, theme: ', theme);
            return (
              <div style={theme == 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
                GrandChildComponent is in the {theme} theme
                <br />
                <button onClick={() => this.onClick(theme, setTheme)}>Change Theme</button>
              </div>
            );
          }
        }
      </ThemeContext.Consumer>
    );
  }
}


// class GrandChildComponent extends Component {

//   // can only subscibe to a single context with this way
//   static contextType = ThemeContext;

//   onClick = (theme, setTheme) => {
//     console.log('onclick: thme: ', theme);
//     const updatedTheme = theme == 'light' ? 'dark' : 'light';
//     setTheme(updatedTheme);
//   };

//   componentDidMount() {
//     console.log('context in didmount: ', this.context);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('context in didupdate : ', this.context);
//   }

//   render() {

//     // The context object is availalbe to other lifecycle methods like componentDidMount, componentDidUpdate, etc
//     const { theme, setTheme } = this.context;

//     console.log('GrandChildComponent render theme: ', theme);
//     return (
//       <div style={theme == 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
//         GrandChildComponent is in the {theme} theme
//         <br />
//         <button onClick={() => this.onClick(theme, setTheme)}>Change Theme</button>
//       </div>
//     );
//   }
// }