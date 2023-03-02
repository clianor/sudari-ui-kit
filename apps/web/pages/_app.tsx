import type { AppProps } from 'next/app';
import React from 'react';

import GlobalStyles from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
