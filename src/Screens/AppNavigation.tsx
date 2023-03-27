import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Account} from '.';
import AuthenicationStack from './Authentication/AuthenticationStack';
import HomeStack from './Home/HomeStack';
import {useAuth} from '../Utils/AuthProvider';

export type AppStackNavigationParms = {
  Authentication: undefined;
  Home: undefined;
  Account?: {
    id: string | undefined;
  };
};

const Stack = createNativeStackNavigator<AppStackNavigationParms>();

export default function AppNavigation() {
  const {token} = useAuth();

  // console.log(user);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_left',
          }}>
          {token == null ? (
            <Stack.Screen
              name="Authentication"
              component={AuthenicationStack}
            />
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeStack} />
              <Stack.Screen name="Account" component={Account} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
