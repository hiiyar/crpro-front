import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Test', withInfo({ inline: true })(() => <Card>xd</Card>))
  .add('xd', withInfo({ inline: true })(() => <Card>xd3</Card>));
