// @flow
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import SvgEditor from './SvgEditor';
import theme from './theme';

class App extends Component<any> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SvgEditor />
      </ThemeProvider>
    );
  }
}

export default App;
