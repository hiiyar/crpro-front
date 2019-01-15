import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Layout, { Content } from './Layout';

storiesOf('Layout', module)
  .add('Basic', () => (
    <Layout>
      <Content>
        <div
          css={{
            height: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'red',
          }}>
          Content!
        </div>
      </Content>
    </Layout>
  ))
  .add('Long content', () => (
    <Layout>
      <Content>
        <div
          css={{
            height: 3500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'red',
          }}>
          Very Long Content
        </div>
      </Content>
    </Layout>
  ));
