import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Account, Camera, Chat, Users} from '../Screens';
import AuthenicationStack from '../Screens/Authentication/AuthenticationStack';
import HomeStack from '../Screens/Home/HomeStack';
// import {useAuth} from './AuthProvider';

const Stack = createNativeStackNavigator<any>();

export default function AppNavigation() {
  // const user = useAuth();
  // console.log(user);

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
          <Stack.Screen name="Home" component={HomeStack} />
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
