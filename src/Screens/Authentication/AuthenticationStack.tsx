// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Animated} from 'react-native';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WelcomeScreen from './WelcomeScreen';

const AuthStack = createNativeStackNavigator();
// const AuthStack = createStackNavigator();
const config: TransitionSpec = {
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

export default function AuthenicationStack() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // },
        animation: 'slide_from_right',
      }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
}
