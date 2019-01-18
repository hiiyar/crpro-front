import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import css from '@emotion/css';
import { Global } from '@emotion/core';
import ProductSans from '../static/fonts/Product_Sans_Regular.ttf';

export const theme = {
  primary: {
    100: 'hsl(204, 94%, 85%)',
    300: 'hsl(208, 100%, 50%)',
    700: 'hsl(211,38%,23%)',
  },
  grey: {
    100: 'hsl(210, 36%, 96%)',
    300: 'hsl(209, 23%, 60%)',
    500: 'hsl(209, 34%, 30%)',
    700: 'hsl(209, 61%, 16%)',
  },
  danger: {
    100: 'hsl(0, 100%, 91%)',
    700: 'hsl(0, 27%, 30%)',
  },
  white: 'hsla(360, 100%, 100%, 1)',
  shadow: 'hsla(209, 29%, 80%, 1)',
};

export type ITheme = typeof theme;

const global = css`
  @font-face {
    font-family: 'Product Sans';
    src: url(${ProductSans});
  }

  @font-face {
    font-family: 'Product Sans';
    src: url('../static/fonts/Product_Sans_Bold.ttf');
    font-weight: bold, 700;
  }

  * {
    font-family: 'Product Sans';
  }

  body {
    background-color: ${theme.grey['100']};
  }

  code {
    background-color: ${theme.white};
    color: ${theme.grey[500]};
    padding: 4px;
  }

  hr {
    margin: 40px 0;
  }
`;

const Context: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    {children}
  </ThemeProvider>
);

export default Context;
