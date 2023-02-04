import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Account, Camera, Chat, Users} from '../Screens';
import AuthenicationStack from '../Screens/Authentication/AuthenticationStack';
// import {useAuth} from './AuthProvider';

const Stack = createNativeStackNavigator<any>();
// const Stack = createStackNavigator<any>();

export default function AppNavigation() {
  // const user = useAuth();
  // console.log(user);
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}>
        {/* {user == null ? ( */}
        <Stack.Screen name="Authentication" component={AuthenicationStack} />
        {/* ) : ( */}
        <>
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Account" component={Account} />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
