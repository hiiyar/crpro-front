import { configure, addDecorator } from '@storybook/react';
import ThemeContext from './../lib/theme';

import React from 'react';

addDecorator(story => <ThemeContext>{story()}</ThemeContext>);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
