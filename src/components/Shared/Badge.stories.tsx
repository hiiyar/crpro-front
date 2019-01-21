import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge from './Badge';
import { enColors } from '../../enum/colors';

storiesOf('Badge', module).add(
  'Basic',
  withInfo({ inline: true })(() => (
    <section>
      <p>Badge with small text:</p>
      <Badge>PRO Gamer</Badge>

      <p>Custom color:</p>
      <Badge color={enColors.danger}>LOSS</Badge>
    </section>
  )),
);
