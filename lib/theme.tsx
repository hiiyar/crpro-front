import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

export const theme = {
  primary: {
    300: 'hsl(208, 100%, 50%)',
    700: 'hsl(211,38%,23%)',
  },
  grey: {
    100: 'hsl(210, 36%, 96%)',
    300: 'hsl(209, 23%, 60%)',
    500: 'hsl(209, 34%, 30%)',
    700: 'hsl(209, 61%, 16%)',
  },
};

export type ITheme = typeof theme;

const Context: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Context;
