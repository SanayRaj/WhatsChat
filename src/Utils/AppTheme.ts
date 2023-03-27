import {makeTheme} from 'dripsy';
import Colors from './colors';

export const Fonts = {
  Light: 'Montserrat-Light',
  Regular: 'Montserrat-Regular',
  Medium: 'Montserrat-Medium',
  SemiBold: 'Montserrat-SemiBold',
  Bold: 'Montserrat-Bold',
};

const AppTheme = makeTheme({
  space: {
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
    $7: 36,
  },
  colors: {
    $background: '#000',
    $primary: Colors.$green,
    ...Colors,
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
      default: 'MontSerrat-Regular',
    },
  },
  fonts: {
    root: 'MontSerrat',
  },
});

export default AppTheme;
