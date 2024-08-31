import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

export default function MainFunctionComponent() {
  const [theme, setTheme] = useState('light');
  const propsObj = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={propsObj}>
        MainComponent1
        <br />
        <ChildComponent />
      </ThemeContext.Provider>
      <p style={{ backgroundColor: 'red' }}>
        {'Some paragraph that doesn\'t use the props'}
      </p>
      <ThemeContext.Provider value={propsObj}>
        MainComponent2
        <br />
        <ChildComponent />
      </ThemeContext.Provider>
    </>
  );
}

function ChildComponent() {
  return (
    <div>
      ChildComponent
      <br />
      <GrandChildComponent />
    </div>
  );
}

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => {
    const updatedTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  console.log('theme: ', theme);
  return (
    <div style={theme == 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
      GrandChildComponent is in the {theme} theme
      <br />
      <button onClick={onClick}>Change Theme</button>
    </div>
  );
}