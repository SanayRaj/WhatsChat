import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, StyleSheet} from 'react-native';
import {
  AuthScreenTemplate,
  Button,
  IconButton,
  Spacer,
  ValidationInput,
} from '../../Components';
import {FormRules} from '../../Utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackNavigationParms} from './AuthenticationStack';
import {Supabase} from '../../Utils/supabase.config';
import useFetchState from '../../Utils/hooks/useFetchState';

type Props = {
  navigation: StackNavigationProp<AuthStackNavigationParms, 'SignUp'>;
};

const SignUpScreen: React.FC<Props> = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const {handleSubmit, control} = useForm();
  const [fetchState, dispatch] = useFetchState();

  async function signUpWithEmail(_value: any) {
    Keyboard.dismiss();
    dispatch({type: 'FETCH_START'});
    // Handle Supabase Authentication
    const {error, data} = await Supabase.auth.signUp({
      email: _value.email,
      password: _value.password,
      options: {
        data: {
          username: _value.username,
        },
      },
    });
    if (error) {
      console.log('Error:', error);
      dispatch({type: 'FETCH_ERROR', payload: error.message});
    } else {
      console.log('Success, User is', data);
      dispatch({type: 'FETCH_SUCCESS'});
    }
  }

  return (
    <AuthScreenTemplate
      title="SignUp"
      subtitle="Fill out your auth credentials and sign up."
      goBack={navigation.goBack}>
      <>
        <ValidationInput
          placeholder="Username"
          keyboardType="default"
          disabled={fetchState.loading}
          //react-hook-form
          name="username"
          control={control}
          rules={FormRules.username}
        />
        <Spacer height={8} />
        <ValidationInput
          placeholder="Email"
          keyboardType="email-address"
          disabled={fetchState.loading}
          //react-hook-form
          name="email"
          control={control}
          rules={FormRules.email}
        />
        <Spacer height={8} />
        <ValidationInput
          secureTextEntry={passwordShown}
          placeholder="Password"
          disabled={fetchState.loading}
          control={control}
          name="password"
          rules={FormRules.password}
          rightElement={
            <IconButton
              onPress={() => setPasswordShown(!passwordShown)}
              icon={
                <FeatherIcon
                  name={passwordShown ? 'eye' : 'eye-off'}
                  size={16}
                  color={'#AAA'}
                  style={styles.mr8}
                />
              }
            />
          }
        />
        <Spacer height={34} />
        <Button
          varient="fill"
          loading={fetchState.loading}
          onPress={handleSubmit(signUpWithEmail)}>
          SignUp
        </Button>
      </>
    </AuthScreenTemplate>
  );
};

const styles = StyleSheet.create({
  mr8: {
    marginRight: 8,
  },
});

export default SignUpScreen;
