// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SvgEditor from './SvgEditor';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <SvgEditor />
  </ThemeProvider>
);

export default App;
