import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chat, Users, SignIn, SignUp, Account} from '../Screens';
import {useAuth} from './AuthProvider';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useAuth();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
        {user == null ? (
          //not authenticated
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          //authenticated
          <>
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Account" component={Account} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
