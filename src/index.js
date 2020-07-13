import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState('');

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: '0 16px 24 px',
          padding: '8px',
          background: 'none',
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: '0 16px 24 px',
          padding: '8px',
          background: 'none',
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Goodbye world</SecondaryButton>
        <TertiaryButton>Hey world</TertiaryButton>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
