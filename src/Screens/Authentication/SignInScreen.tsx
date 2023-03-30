import React from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {
  AuthScreenTemplate,
  Button,
  Spacer,
  ValidationInput,
} from '../../Components';
import {FormRules} from '../../Utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackNavigationParms} from './AuthenticationStack';
import useFetchState from '../../Utils/hooks/useFetchState';
import {SupabaseClient} from '../../Utils/supabase.config';

type Props = {
  navigation: StackNavigationProp<AuthStackNavigationParms, 'SignIn'>;
};

const SignInScreen: React.FC<Props> = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const [fetchState, dispatch] = useFetchState();

  console.log(fetchState);

  async function signInWithEmail(_value: any) {
    Keyboard.dismiss();
    dispatch({type: 'FETCH_START'});
    // Handle Supabase Authentication
    const {error} = await SupabaseClient.auth.signInWithPassword({
      email: _value.email,
      password: _value.password,
    });
    if (error) {
      console.log('Error:', error);
      dispatch({type: 'FETCH_ERROR', payload: error.message});
    } else {
      console.log('Success:');
      dispatch({type: 'FETCH_SUCCESS'});
    }
  }
  return (
    <AuthScreenTemplate
      title="SignIn"
      subtitle="Fill out your auth credentials and sign in."
      goBack={navigation.goBack}>
      <>
        <ValidationInput
          placeholder="Email"
          disabled={fetchState.loading}
          keyboardType="email-address"
          //react-hook-form
          control={control}
          name="email"
          rules={FormRules.email}
        />
        <Spacer height={8} />
        <ValidationInput
          secureTextEntry={true}
          placeholder="Password"
          disabled={fetchState.loading}
          //react-hook-form
          control={control}
          name="password"
          rules={FormRules.password}
        />
        <Spacer height={34} />
        <Button
          varient="fill"
          loading={fetchState.loading}
          onPress={handleSubmit(signInWithEmail)}>
          Sign In
        </Button>
        <Spacer height={6} />
        <Button
          varient="clear"
          disabled={fetchState.loading}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password? Reset here
        </Button>
      </>
    </AuthScreenTemplate>
  );
};

export default SignInScreen;
