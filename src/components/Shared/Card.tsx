import * as React from 'react';
import css from '@emotion/css';
import { ITheme } from '../../../lib/theme';

interface Props {
  /**
   * Value to display, either empty (" ") or "X" / "O".
   *
   * @default " "
   **/
  value?: ' ' | 'X' | 'O';

  /** Cell position on game board. */
  position?: { x: number; y: number };

  /** Called when an empty cell is clicked. */
  onClick?: (x: number, y: number) => void;
}

const cardContainer = (theme: ITheme) => css`
  min-width: 320px;
  min-height: 20px;
  background-color: ${theme.white};
`;

const Card: React.FunctionComponent<Props> = props => {
  return <div css={cardContainer}>{props.children}</div>;
};

export default Card;
