import * as React from 'react';
import css from '@emotion/css';

import { ITheme } from '../../../lib/theme';

type Props = {};

const layoutContent = (theme: ITheme) => css`
  width: 100%;
  height: 100%;
  background-color: ${theme.grey[100]};

  display: flex;
  align-items: center;
  flex-direction: column;
  & > * {
    flex-shrink: 0;
  }
`;

const headerContainer = (theme: ITheme) => css`
  width: 100%;
  height: 45px;
  background-color: ${theme.grey[100]};
`;

const navContainer = (theme: ITheme) => css`
  width: 100%;
  height: 45px;
  background-color: ${theme.primary[300]};
`;

const mainContainer = css`
  width: 100%;
  flex: 1;
`;

const footerContainer = (theme: ITheme) => css`
  width: 100%;
  height: 120px;
  background-color: ${theme.primary[700]};
`;

const contentContainer = css`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Content: React.FunctionComponent<{}> = props => {
  return <section css={contentContainer}>{props.children}</section>;
};

const Layout: React.FunctionComponent<Props> = props => {
  return (
    <div css={layoutContent}>
      <header css={headerContainer} />
      <nav css={navContainer} />
      <main css={mainContainer}>{props.children}</main>

      <footer css={footerContainer} />
    </div>
  );
};

export default Layout;
