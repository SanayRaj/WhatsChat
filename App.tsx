import React from 'react';
import {DripsyProvider, makeTheme} from 'dripsy';
import AuthProvider from './src/Utils/AuthProvider';
import AppNavigation from './src/Utils/AppNavigation';

function App() {
  const theme = makeTheme({
    space: {
      // recommended: set 0 first, then double for consistent nested spacing
      $0: 0,
      $1: 4,
      $2: 8,
      $3: 16,
      $4: 32,
      $5: 64,
      $6: 128,
      $7: 256,
    },
    fontSizes: {
      $0: 12,
      $1: 14,
      $2: 16,
      $3: 18,
      $4: 24,
      $5: 28,
      $6: 32,
    },
    colors: {
      $background: '#000',
      $primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
    customFonts: {
      ['MontSerrat']: {
        '100': 'Montserrat-Light',
        '200': 'Montserrat-Light',
        '300': 'Montserrat-Regular',
        '400': 'Montserrat-Regular',
        '500': 'Montserrat-Medium',
        '600': 'Montserrat-Medium',
        '700': 'Montserrat-SemiBold',
        '800': 'Montserrat-SemiBold',
        '900': 'Montserrat-Bold',
        default: 'MontSerrat-Regular', // if no font family is specified, we use this, or fallback to 400
      },
    },
    fonts: {
      root: 'MontSerrat',
    },

    // const inputVarientStyles = {
    //   fill: 'bg-green-600 active:bg-green-700 active:scale-2',
    //   outline: 'border border-neutral-700 bg-transparent active:bg-neutral-900',
    //   clear: '',
    // };
  });
  return (
    <DripsyProvider theme={theme}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </DripsyProvider>
  );
}

export default App;

('pass.whatsChat');
