import {extendTheme} from 'native-base';
import Colors from './colors';
import Fonts from './fonts';

const AppTheme = extendTheme({
  fonts: {
    heading: Fonts.Bold,
    body: Fonts.Medium,
  },
  colors: {
    primary: {
      50: Colors.indigo[50],
      100: Colors.indigo[100],
      200: Colors.indigo[200],
      300: Colors.indigo[300],
      400: Colors.indigo[400],
      500: Colors.indigo[500],
      600: Colors.indigo[600],
      700: Colors.indigo[700],
      800: Colors.indigo[800],
      900: Colors.indigo[900],
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          borderRadius: 100,
          shadow: '4',
        },
        ghost: {
          borderRadius: 100,
        },
      },
    },
    Input: {
      variants: {
        outline: {
          borderRadius: 10,
        },
      },
    },
    Text: {
      baseStyle: () => {
        return {
          fontFamily: Fonts.Medium,
          color: 'gray.500',
          fontSize: 16,
        };
      },
    },
    IconButton: {
      baseStyle: () => {
        return {
          borderRadius: 100,
        };
      },
    },
  },
});

export default AppTheme;
