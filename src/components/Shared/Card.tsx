import * as React from 'react';
import css from '@emotion/css';
import { ITheme } from '../../../lib/theme';
import { theme } from '../../../lib/theme';

interface Props {
  /** Receive HTML element, React element or text for show in footer */
  footer?: HTMLElement | React.ReactNode | React.ReactElement<any>;

  /** Set minimum card height */
  minHeight?: number;
}

const cardContainer = (theme: ITheme) => css`
  background-color: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 8px 12px ${theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const contentContainer = css`
  padding: 16px;
`;

const footerContainer = (theme: ITheme) => css`
  background-color: ${theme.grey[100]};
  border-radius: 0 0 10px 10px;
  padding: 16px;
`;

const Card: React.FunctionComponent<Props> = props => {
  return (
    <div
      css={css`
        ${cardContainer(theme)};
        min-height: ${props.minHeight}px;
      `}>
      <div css={contentContainer}>{props.children}</div>
      {props.footer && <div css={footerContainer}>{props.footer}</div>}
    </div>
  );
};

export default Card;
