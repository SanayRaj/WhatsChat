// import {extendTheme} from 'native-base';
import Colors from './colors';
import Fonts from './fonts';

import {createTheme} from '@rneui/themed';

// const AppTheme = extendTheme({
//   fonts: {
//     heading: Fonts.Bold,
//     body: Fonts.Medium,
//   },
//   colors: {
//     primary: {
//       50: Colors.indigo[50],
//       100: Colors.indigo[100],
//       200: Colors.indigo[200],
//       300: Colors.indigo[300],
//       400: Colors.indigo[400],
//       500: Colors.indigo[500],
//       600: Colors.indigo[600],
//       700: Colors.indigo[700],
//       800: Colors.indigo[800],
//       900: Colors.indigo[900],
//     },
//   },
//   components: {
//     Button: {
//       variants: {
//         solid: {
//           borderRadius: 100,
//           shadow: '4',
//           borderWidth:1,
//           borderColor:"primary.700"
//         },
//         ghost: {
//           borderRadius: 100,
//         },
//       },
//     },
//     Input: {
//       variants: {
//         outline: {
//           borderRadius: 10,
//         },
//       },
//     },
//     Text: {
//       baseStyle: () => {
//         return {
//           fontFamily: Fonts.Medium,
//           color: 'gray.500',
//           fontSize: 16,
//         };
//       },
//     },
//     IconButton: {
//       baseStyle: () => {
//         return {
//           borderRadius: 100,
//         };
//       },
//     },
//   },
// });

const AppTheme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 100,
        marginHorizontal: 8,
      },
      containerStyle: {},
    },
    Input: {
      inputContainerStyle: {
        borderColor: 'transparent',
        borderBottomWidth: 0,
      },
      inputStyle: {
        borderWidth: 1,
        borderColor: Colors.gray[300],
        borderRadius: 10,
        paddingHorizontal: 16,
      },
      errorStyle: {color: Colors.red[500], fontSize: 14},
    },
    Text: {
      h1Style: {fontFamily: Fonts.Bold, fontSize: 50},
      h2Style: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
      },
    },
  },
});

export default AppTheme;
