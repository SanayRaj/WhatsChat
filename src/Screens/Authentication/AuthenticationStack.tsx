import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WelcomeScreen from './WelcomeScreen';

export type AuthStackNavigationParms = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword?: {
    email: string | undefined;
  };
};

const AuthStack = createNativeStackNavigator<AuthStackNavigationParms>();

export default function AuthenicationStack() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
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
