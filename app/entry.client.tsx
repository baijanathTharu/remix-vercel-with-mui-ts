import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from './src/ui-config/emotion-cache';
import theme from './src/ui-config/theme';

const emotionCache = createEmotionCache();

hydrate(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>,
  document
);
