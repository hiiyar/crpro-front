import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge from './Badge';

storiesOf('Badge', module).add(
  'Basic',
  withInfo({ inline: true })(() => (
    <section>
      <p>Badge with small text:</p>
      <Badge>PRO Gamer</Badge>

      <p>Custom color:</p>
      <Badge color="danger">LOSS</Badge>
    </section>
  )),
);
