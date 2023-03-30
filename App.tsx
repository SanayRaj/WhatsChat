import 'react-native-url-polyfill/auto';
import React from 'react';
import {DripsyProvider} from 'dripsy';
import AuthProvider from './src/Utils/AuthProvider';
import AppNavigation from './src/Screens/AppNavigation';
import Theme from './src/Utils/AppTheme';

function App() {
  return (
    <DripsyProvider theme={Theme}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </DripsyProvider>
  );
}

export default App;

('pass.whatsChat');
