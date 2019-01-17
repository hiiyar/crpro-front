import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const footerContent = <div>Component that will be shown in the footer</div>;
const cardContent = (
  <div>
    <h1>Card Content</h1>
    <p>Child element will be processed in this area</p>
  </div>
);

storiesOf('Card', module).add(
  'Simple Card ',
  withInfo({ inline: true })(() => (
    <section>
      <p>A simple card component that involves other React elements:</p>
      <Card>{cardContent}</Card>
      <p>Card component with footer:</p>
      <Card footer={footerContent}>{cardContent}</Card>
      <p>Card with minimum height size:</p>
      <Card minHeight={300} footer={footerContent}>
        {cardContent}
        <small>Minimum height size 300px</small>
      </Card>
    </section>
  )),
);
