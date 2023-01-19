import React from 'react';
import AuthProvider from './src/Utils/AuthProvider';
import AppNavigation from './src/Utils/AppNavigation';
import {Platform, UIManager} from 'react-native';

function App() {
  if (Platform.OS === 'android')
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

export default App;
