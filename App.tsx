import React from 'react';
import {Platform, UIManager} from 'react-native';
import AppNavigation from './src/Utils/AppNavigation';
import AuthProvider from './src/Utils/AuthProvider';
import {View} from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

function App() {
  if (Platform.OS === 'android')
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

  return (
    <View className="flex-1 bg-black">
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </View>
  );
}

export default App;

('pass.whatsChat');
