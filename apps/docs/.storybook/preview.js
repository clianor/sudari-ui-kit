import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import 'twin.macro';
import { ThemeProvider } from 'ui';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  docs: {
    inlineStories: false,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <div tw="flex justify-center items-start gap-x-4 px-5 py-[30px] w-full">
          <Story {...context} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  ),
];
