import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PathBuilder from './components/builder/PathBuilder';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PathBuilder />
      </ThemeProvider>
    );
  }
}

export default App;
