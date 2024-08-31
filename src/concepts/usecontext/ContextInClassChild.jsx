import { memo, Component } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider';

export default function ContextInClassChild() {
  console.log('ContextInClassChild render');
  return (
    <>
      <ThemeProvider>
        MainComponent
        <br />
        <ChildComponent />
      </ThemeProvider>
      <p style={{ backgroundColor: 'red' }}>
        {'Some paragraph that doesn\'t use the props'}
      </p>
      <ThemeProvider>
        MainComponent
        <br />
        <ChildComponent />
      </ThemeProvider>
    </>
  );
}

const ChildComponent = memo(function ChildComponent() {
  console.log('ChildComponent with memo render');
  return (
    <div>
      ChildComponent
      <br />
      <GrandChildComponent />
    </div>
  );
});

class GrandChildComponent extends Component {

  onClick = (theme, setTheme) => {
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