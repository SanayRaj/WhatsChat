import React from 'react';
import AuthProvider from './src/Utils/AuthProvider';
import {NativeBaseProvider} from 'native-base';
import AppTheme from './src/Utils/AppTheme';
import AppNavigation from './src/Utils/AppNavigation';

function App() {
  return (
    <NativeBaseProvider theme={AppTheme}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default App;
