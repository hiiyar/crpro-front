import * as React from 'react';
import css from '@emotion/css';
import { theme } from '../../../lib/theme';

interface Props {
  /** Pallete color for badge background and font color
   * @default "primary"
   */
  color?: string;
}

const badgeContainer = css`
  padding: 2px 12px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 900;
`;

const Badge: React.FunctionComponent<Props> = props => {
  const color = props.color || 'primary';

  return (
    <span
      css={css`
        ${badgeContainer};
        background-color: ${theme[color][100]};
        color: ${theme[color][700]};
      `}>
      {props.children}
    </span>
  );
};

export default Badge;
