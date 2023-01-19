import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@rneui/themed';
import React from 'react';
import {Account, Chat, Users} from '../Screens';
import AuthenicationStack from '../Screens/Authentication/AuthenticationStack';
import AppTheme from './AppTheme';
import {useAuth} from './AuthProvider';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useAuth();
  
  return (
    <ThemeProvider theme={AppTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'none'}}>
          {user == null ? (
            //not authenticated
            <Stack.Screen
              name="Authentication"
              component={AuthenicationStack}
            />
          ) : (
            // {/* //authenticated */}
            <>
              <Stack.Screen name="Users" component={Users} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="Account" component={Account} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
