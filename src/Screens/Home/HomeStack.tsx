import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ReelsScreen from './ReelsScreen';

const HomeStack = createNativeStackNavigator();

export default function AuthenicationStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <HomeStack.Screen name="Reels" component={ReelsScreen} />
    </HomeStack.Navigator>
  );
}
